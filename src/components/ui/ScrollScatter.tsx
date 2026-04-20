import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, ReactNode, useState } from "react";

interface ScrollScatterProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down" | "both-x" | "both-y";
  distance?: number;
}

/**
 * Wraps content in a scroll-linked animation.
 */
export const ScrollScatter = ({ children, direction = "up", distance = 100 }: ScrollScatterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const lockAtProgress = 0.12;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Triggers from bottom of screen to top
  });

  const xLeftProgress = useTransform(scrollYProgress, [0, lockAtProgress], [-distance, 0]);
  const xRightProgress = useTransform(scrollYProgress, [0, lockAtProgress], [distance, 0]);
  const yUpProgress = useTransform(scrollYProgress, [0, lockAtProgress], [distance, 0]);
  const yDownProgress = useTransform(scrollYProgress, [0, lockAtProgress], [-distance, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, lockAtProgress * 0.8], [0, 1]);

  let x: any = 0;
  let y: any = 0;

  if (direction === "left") x = xLeftProgress;
  else if (direction === "right") x = xRightProgress;
  else if (direction === "up") y = yUpProgress;
  else if (direction === "down") y = yDownProgress;
  else if (direction === "both-x") x = xLeftProgress;

  const opacity = opacityProgress;

  return (
    <motion.div ref={ref} style={{ x, y, opacity }} className="w-full h-full">
      {children}
    </motion.div>
  );
};
