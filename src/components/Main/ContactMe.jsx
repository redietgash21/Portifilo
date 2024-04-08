





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