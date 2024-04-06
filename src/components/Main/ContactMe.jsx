





import React from "react";
import './Main.css'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
function ContactMe(){
    return(
        <>
        <section id="contact" >
            <h2>contact Info</h2>
            <div className="grid">
              <div>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
                <div>
                    <button><FaLinkedin/></button>
                    <button><FaTelegram/></button>
                    <button><FaFacebook/></button>
                    <button><FaWhatsapp/></button>
                    <button><FaInstagram/></button>
                    <button><FaTiktok/></button>
                </div>
            </div>
        </section>
        </>
    )
}
export default ContactMe