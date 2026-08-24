import { motion } from "motion/react";

export function DrawCheck({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M4 10.2L8 14.2L16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay, ease: "easeOut" }}
      />
    </svg>
  );
}
