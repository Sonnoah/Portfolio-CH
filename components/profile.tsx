

import { motion } from "framer-motion";

export default function Profile() {
   return (
    <main className="hero">
      <div className="frame">      
        <motion.img
          src="assets/img.jpg"
          alt="profile"
          className="photo"
          width={500}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
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
