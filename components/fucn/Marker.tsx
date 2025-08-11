"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ReactNode } from "react";

type MarkerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function Marker({
  children,
  className,
  amount = 0.,
}: MarkerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount });

  return (
    <motion.span
      ref={ref}
      className={`marker ${className ?? ""}`}
      animate={{ backgroundSize: inView ? "100% 100%" : "0% 100%" }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
