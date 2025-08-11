"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Project() {
    
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <div className="PJ">
      <h1 className="PJ-head">PROJECT</h1>

      <motion.section
        className="cards"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} 
      >

        <motion.div variants={item}>
          <Link
            href="https://nodered-dashboard.onrender.com/ui/#!/0?socketid=62P4XOa75oy4dobtAAAB"
            className="Link"
            target="_blank"
          >
            <div className="card">
              <div className="img-wrap">
                <img className="img-pj" src="assets/dashboard.png" />
              </div>
              <h3>Railway Inspection Vehicle Dashboard</h3>
              <p>A dashboard displaying data from the Railway Inspection Vehicle's various systems</p>
              <div className="card-tag">
                <p>Arduino IDE</p><p>Node-RED</p><p>MongoDB</p><p>Magellan</p>
              </div>
            </div>
          </Link>
        </motion.div>


        <motion.div variants={item}>
          <Link href="https://github.com/Sonnoah/MTD_Project_tyeso" className="Link" target="_blank">
            <div className="card">
              <div className="img-wrap">
                <img className="img-pj" src="assets/tyeso.png" />
              </div>
              <h3>Tyeso Stock</h3>
              <p>Website for managing Tyeso in-store stock</p>
              <div className="card-tag">
                <p>Next.js</p><p>Prisma</p><p>Supabase</p><p>daisyUI</p>
              </div>
            </div>
          </Link>
        </motion.div>


        <motion.div variants={item}>
          <Link href="https://github.com/Sonnoah/qiuqiao" className="Link" target="_blank">
            <div className="card">
              <div className="img-wrap">
                <img className="img-pj-m" src="assets/qq1.png" />
                <img className="img-pj-m" src="assets/qq3.png" />
                <img className="img-pj-m" src="assets/qq2.png" />
              </div>
              <h3>Qiuqiao</h3>
              <p>Qiuqiao application designed to provide a convenient and entertaining way to tell fortunes.</p>
              <div className="card-tag">
                <p>Flutter</p><p>Firebase</p>
              </div>
            </div>
          </Link>
        </motion.div>


        <motion.div variants={item}>
          <Link href="https://github.com/Sonnoah/ThungThung-Pet-Shop" className="Link" target="_blank">
            <div className="card">
              <div className="img-wrap">
                <img className="img-pj-m" src="assets/tt1.png" />
                <img className="img-pj-m" src="assets/tt3.png" />
                <img className="img-pj-m" src="assets/tt4.jpeg" />
              </div>
              <h3>ThungThung Pet Shop</h3>
              <p>ThungThung Pet Shop is an e-commerce application designed to facilitate the purchase of pet goods/services.</p>
              <div className="card-tag">
                <p>Flutter</p><p>Firebase</p><p>Lottiefiles</p>
              </div>
            </div>
          </Link>
        </motion.div>

        
      </motion.section>

    </div>
  );
}
