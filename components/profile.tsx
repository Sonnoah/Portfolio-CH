

import { motion } from "framer-motion";

export default function Profile() {
   return (
    <main className="hero">
      <div className="frame">      
        <motion.img
          src="assets/img.jpg"
          alt="profile"
          className="photo"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}   
          animate={{ opacity: 1, scale: 1, y: 0 }}      
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="star">*</span>
          <span>HELLO I’M</span><br />
          <span>CHAYADA</span> <span className="accent">HOMNAN</span>
        </motion.h1>
      </div>

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


       <motion.img
          src="assets/Arrow.gif"
          className="photo-arrow"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}   
          animate={{ opacity: 1, scale: 1, y: 0 }}      
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
    </main>
  );
}
