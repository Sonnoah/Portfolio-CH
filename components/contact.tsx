"use client";

import Link from "next/link";


export default function Contact() {
  return (

    <div className="CT">
        <h1 className="CT-head">CONTACT</h1>
        <hr></hr>
          <div className="CT-container">

            <div className="CT-left">
              <div className="Ct-title">
                <img className="img-ct-m" src="assets/email-w.png"/>
                <p>Chayada.01st@gmail.com</p>
              </div>

              <div className="Ct-title">
                <img className="img-ct-m" src="assets/phone-w.png"/>
                <p>098 - 2847913</p>
              </div>
            </div>

            <div className="CT-right">
              <Link href="https://www.facebook.com/chayada.homnan" className="Link" target="_blank">
                <img className="img-ct-h" src="assets/facebook-w.png"/>
              </Link>

              <Link href="https://www.instagram.com/sonnosa_01st/" className="Link" target="_blank">
                <img className="img-ct-h" src="assets/instagram-w.png"/>
              </Link>
              
              <Link href="https://github.com/Sonnoah" className="Link" target="_blank">
                <img className="img-ct-h" src="assets/github-w.png"/>
              </Link>
            </div>
        </div> 
    </div>   
  );
}
