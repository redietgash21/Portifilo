




import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Main.css'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
function ContactMe(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xag7sub', 
        'template_voxg4ns', 
        form.current, 
        'jx8y9aJBpGzT_xqDB',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   
  
    return(
        <>
        <section id="contact" >
            <h2>contact Info</h2>
            <div className="grid">
              
                <form ref={form} onSubmit={sendEmail}>
                    
                    <input type="text" name="user_name" placeholder='Full Name'/>
                    <input type="text" name="project_name" placeholder='Project Title'/>
                    
                    <input type="email" name="user_email" placeholder='Email'/>
                    
                    <textarea name="message" placeholder='Message' />
                    <input type="submit" value="Send" />
                </form>
                <div className="contactDiv">
                <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://www.linkedin.com/in/rediet-gashaw/">
                                        <FaLinkedin/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://t.me/redietgash21">
                                        <FaTelegram/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                                    <a  target="-blank"
                                    href="#">
                                        <FaFacebook/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <FaWhatsapp/>
                        </a>
                    </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <FaInstagram/>
                        </a>
                    </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <FaTiktok/>
                        </a>
                    </span>
                </div>
            </div>
        </section>
        </>
    )
}
export default ContactMe