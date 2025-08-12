"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (  
      <nav className="tag">
        {[
          { text: "HOME", link: "#profile" },
          { text: "ABOUT ME", link: "#about_me" },
          { text: "PROJECT", link: "#project" },
          { text: "CONTACT", link: "#contact" },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {item.text}
          </motion.a>
        ))}
      </nav>

  );
}
