import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { CountUp } from "@/components/animations/CountUp";

// -- Gauge geometry -----------------------------------------------------
// Angles measured clockwise from 12 o'clock. The gauge sweeps 240°, leaving
// a 120° gap at the bottom — the standard analog-instrument layout.

function polarPoint(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polarPoint(cx, cy, r, startDeg);
  const end = polarPoint(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

const GAUGE_START = -120;
const GAUGE_END = 120;
const APPROVAL_VALUE = 0.98; // 98% — real figure, matches TrustBar/JourneyApproval
const GAUGE_TRACK = arcPath(60, 60, 46, GAUGE_START, GAUGE_END);
const MARKER = polarPoint(60, 60, 46, GAUGE_START + APPROVAL_VALUE * (GAUGE_END - GAUGE_START));

function ApprovalGauge({
  size,
  reduceMotion,
  delay,
  showLabel = true,
}: {
  size: number;
  reduceMotion: boolean;
  delay: number;
  showLabel?: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <path
          d={GAUGE_TRACK}
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.2"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          d={GAUGE_TRACK}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          initial={{ pathLength: reduceMotion ? APPROVAL_VALUE : 0 }}
          animate={{ pathLength: APPROVAL_VALUE }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }
          }
        />
        <motion.circle
          cx={MARKER.x}
          cy={MARKER.y}
          r="3.5"
          fill="var(--gold-soft)"
          initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduceMotion ? { duration: 0 } : { delay: delay + 1.3, duration: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={showLabel ? "font-serif text-2xl text-cream" : "font-serif text-lg text-cream"}>
          98%
        </span>
        {showLabel && (
          <span className="text-xs uppercase tracking-[0.2em] text-cream/50">Aprovação</span>
        )}
      </div>
    </div>
  );
}

export function InstrumentPanel() {
  const reduceMotion = useReducedMotion() ?? false;
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const bezelX = useTransform(px, [-1, 1], [-4, 4]);
  const bezelY = useTransform(py, [-1, 1], [-3, 3]);
  const faceX = useTransform(px, [-1, 1], [-9, 9]);
  const faceY = useTransform(py, [-1, 1], [-6, 6]);

  useEffect(() => {
    if (reduceMotion) return;
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reduceMotion, px, py]);

  return (
    <>
      {/* Mobile / tablet: compact single gauge, no parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.5 }}
        className="pointer-events-none absolute right-4 top-24 z-10 select-none rounded-2xl border border-gold/20 bg-navy-deep/40 p-2.5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md lg:hidden"
        aria-hidden="true"
      >
        <ApprovalGauge size={68} reduceMotion={reduceMotion} delay={0.9} showLabel={false} />
      </motion.div>

      {/* Desktop: layered glass cluster with cursor-driven parallax */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
        style={{ x: bezelX, y: bezelY }}
        className="pointer-events-none absolute right-10 top-32 z-10 hidden select-none rounded-2xl border border-gold/25 bg-navy-deep/40 p-6 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.65)] backdrop-blur-md lg:block"
        aria-hidden="true"
      >
        <motion.div style={{ x: faceX, y: faceY }} className="flex items-center gap-7">
          <ApprovalGauge size={120} reduceMotion={reduceMotion} delay={1} />

          <div className="flex flex-col items-start border-l border-gold/15 pl-7">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Vistos aprovados
            </span>
            <span className="font-serif text-3xl text-gold-soft">
              <CountUp end={16300} prefix="+" duration={1.8} />
            </span>
            <span className="mt-2 h-px w-10 bg-gold/20" />
            <span className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/40">
              Dados reais · atualizado
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
