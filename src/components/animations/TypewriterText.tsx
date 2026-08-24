import { motion, useReducedMotion } from "motion/react";

/**
 * CSS-only character reveal (width clip + steps()), not a JS-driven text
 * mutation. The full string is always the real DOM text — SSR, SEO, and
 * screen readers see the complete headline immediately; only the visual
 * paint is clipped and revealed over time.
 */
export function TypewriterText({
  text,
  className,
  cursorClassName = "bg-cream/85",
}: {
  text: string;
  className?: string;
  cursorClassName?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative inline-flex items-baseline">
      <span
        className={
          reduceMotion
            ? `inline-block ${className ?? ""}`
            : `animate-typewriter ${className ?? ""}`
        }
        style={reduceMotion ? undefined : { animationTimingFunction: `steps(${text.length}, end)` }}
      >
        {text}
      </span>
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1, 0] }}
          transition={{
            duration: 2.4,
            delay: 2.5,
            times: [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
            ease: "linear",
          }}
          className={`ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.05em] ${cursorClassName}`}
        />
      )}
    </span>
  );
}
