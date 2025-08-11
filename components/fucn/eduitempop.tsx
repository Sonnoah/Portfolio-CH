"use client";
import { motion } from "framer-motion";
import { Marker } from "./Marker";


type EduItemProps = {
  years: string;
  gpa: string;        
  school: string;
  delay?: number;     
};

export function EduItem({ years, gpa, school, delay = 0 }: EduItemProps) {
  return (
    <>
      <motion.div
        className="EDU-Text"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        viewport={{ amount: 0.5 }}
      >
        <p>{years}</p>
        <p><Marker className="Marker-red">GPA : {gpa}</Marker></p>
      </motion.div>

      <motion.p
        className="p-r"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: delay + 0.1 }}
        viewport={{ amount: 0.5 }}
      >
        {school}
      </motion.p>
    </>
  );
}
