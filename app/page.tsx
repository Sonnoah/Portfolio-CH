"use client";

import About_me from "@/components/about-me";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Profile from "@/components/profile";
import Project from "@/components/project";


export default function Home() {
  return (
    <div className="container">

      <section id="profile" className="section">
        <Profile/>
      </section>

    
      <section id="about_me" className="section bg-color-green">
       <About_me/>
      </section>


      <section id="education" className="section ">
        <Education/>
      </section>

      <section id="project">
        <Project/>
      </section>

      <section id="contact" className="bg-color-b" >
        <Contact/>
      </section>
      

    </div>
  );
}
