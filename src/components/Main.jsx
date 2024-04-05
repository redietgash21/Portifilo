






import React from "react";
import './Main.css'
import resume from "../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../assets/AboutMe.png"
import graduationimg from "../assets/graduation.png"
import bdulogo from "../assets/bdulogo.png"
import ipdclogo from "../assets/ipdclogo.jpg"
import bduwisom from "../assets/bduwisom.jpg"
import experience from "../assets/experience.png"
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaBuromobelexperte } from "react-icons/fa";
function Main(){

    return(
    <>
      <main>
        <section className="home" id="home">
            <div>        
                <span className="topline">Hello</span>
                <h1>I'm 
                    <span  >
                    </span>
                  
                </h1>
          
                <div className="btns">
                    
                    <a href={resume} download="Rediet Gashaw-Resume">
                        <button className="btn">
                            download CV
                        </button>
                    </a>
                    
                    <button className="btn">hire me</button>
                </div>
            </div>
            <div>
                <img src={aboutme} />
            </div>
        </section>
        <section  id="about">
            <p>Get To Know More</p>
            <h1>About Me</h1>
            <div className="flex">
                <div className="education">
                    <h2>Education</h2>
                    <div className="container">
                        <div className="card">
                            <div className="logo">
                            
                                <img className="circle circle1" src={bduwisom} alt="" />
                                
                                
                                    <img className="circle circle2" src={bdulogo} alt="" />
                            
                            
                                <img className="circle circle3" src={graduationimg} alt="" />
                                
                            </div>
                            <div className="glass">
                                <div className="content">
                                    <h1>Bahir Dar University</h1>
                                    <p>I have recently completed my BSc in software engineering from Bahir Dar University. 
                                        With a passion for technology and a solid foundation in IT infrastructure management,</p>
                                </div>
                                <div className="footer">
                                <div className="social">
                                    <span className="socialIcon">
                                        <a href="https://www.bdu.edu.et/" target="_blank"><TbWorldWww/></a>
                                    </span>
                                    <span className="socialIcon">
                                        <a  target="-blank"
                                        href="https://www.facebook.com/bduethiopia/">
                                            <FaFacebook/>
                                        </a>
                                    </span>
                                    <span className="socialIcon">
                                        <a href="https://www.linkedin.com/school/bduethiopia/?originalSubdomain=et" target="_blank">
                                            <FaLinkedin/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="experiance">
                   <h2>Experiance</h2>
                <div className="container">
                    <div className="card">
                        <div className="logo">
                        
                            <img className="circle circle1" src={bduwisom} alt="" />
                            
                            
                                <img className="circle circle2" src={ipdclogo} alt="" />
                        
                        
                            <img className="circle circle3" src={experience}/>
                            
                        </div>
                        <div className="glass">
                            <div className="content">
                                <h3>Industrial Parks Development Corporation </h3>
                                <p>I have recently completed my BSc in software engineering from Bahir Dar University. 
                                    With a passion for technology and a solid foundation in IT infrastructure management,</p>
                            </div>
                            <div className="footer">
                            <div className="social">
                                <span className="socialIcon">
                                    <a href="https://ipdc.gov.et" target="_blank"><TbWorldWww/></a>
                                </span>
                                <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://www.facebook.com/IPDCEthiopiaofficial/">
                                        <FaFacebook/>
                                    </a>
                                </span>
                                <span className="socialIcon">
                                    <a href="https://www.linkedin.com/company/ipdcethiopiaofficial/?originalSubdomain=et" target="_blank">
                                        <FaLinkedin/>
                                    </a>
                                </span>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                </div>
                </div>
               
            </div>
        </section>
        <section className="skills" id="skills">
            Skiils
            <article>
                <div className="container"></div>
            </article>
            <article>
                <div className="container">
                    <div className="smaiiCard"></div>
                    <div className="smaiiCard"></div>
                    <div className="smaiiCard"></div>
                    <div className="smaiiCard"></div>
                </div>
            </article>
        </section>
        <section className="projects" id="projects">
            projects

        </section>
        <section className="contact" id="contact">
            contact type
            <input type="text" /><input type="text" /><input type="text" />
        </section>
      </main>
    </>
    )
}

export default Main;