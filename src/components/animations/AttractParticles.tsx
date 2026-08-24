import { useEffect, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

/**
 * Decorative "sparks drawn to a magnet" layer for a CTA button. Renders
 * absolutely inside a `relative` parent; does not touch the button's own
 * content, icon, text, or click handler.
 */
export function AttractParticles({
  active,
  count = 8,
  spread = 46,
  colorClassName = "bg-navy-deep",
}: {
  active: boolean;
  count?: number;
  spread?: number;
  colorClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const particlesRef = useRef<Particle[]>(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (Math.random() * 2 - 1) * spread,
      y: (Math.random() * 2 - 1) * spread,
    })),
  );

  useEffect(() => {
    if (reduceMotion) return;
    if (active) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      });
    } else {
      controls.start((i: number) => ({
        x: particlesRef.current[i].x,
        y: particlesRef.current[i].y,
        opacity: 0.35,
        transition: { type: "spring", stiffness: 120, damping: 16 },
      }));
    }
  }, [active, controls, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <span className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
      {particlesRef.current.map((p, i) => (
        <motion.span
          key={p.id}
          custom={i}
          animate={controls}
          initial={{ x: p.x, y: p.y, opacity: 0.35 }}
          className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${colorClassName}`}
        />
      ))}
    </span>
  );
}
