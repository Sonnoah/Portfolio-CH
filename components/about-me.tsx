import { motion } from "framer-motion";
import { Marker } from "./fucn/Marker";

export default function About_me() {
  return (
    <div className="inner">
        <h1 className="h1-header">ABOUT ME</h1>
      <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.3 }}     
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="p-text">

            I am a <Marker>Computer Science</Marker> student at{" "}
            <Marker>Rajamangala University of Technology Isan</Marker>, Faculty of Science and Arts.
            I have experience in designing and developing UX/UI for applications, websites, and IoT devices. 
          </p>
          <p className="p-text">
            I <Marker>leverage AI</Marker> to enhance my work efficiency, and I am a collaborative team member who is <Marker>accountable</Marker> for my responsibilities,
            with a passion for <Marker>continuous learning</Marker>.
          </p>
        </motion.div>    
    </div>
 
  );
}
