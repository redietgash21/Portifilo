






import React from "react";
import './Main.css'
import resume from "../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../assets/AboutMe.png"
import graduationimg from "../assets/graduationimg.png"
import bdulogo from "../assets/bdulogo.png"
import bduwisom from "../assets/bduwisom.jpg"
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
        <section className="about" id="about">about
            <div className="container">
                <div className="card">
                    <div className="logo">
                       
                        <img className="circle circle1" src={bduwisom} alt="" />
                        
                        
                            <img className="circle circle2" src={bdulogo} alt="" />
                       
                      
                           <img className="circle circle3" src={graduationimg} alt="" />
                        
                    </div>
                    <div className="glass">
                         <div className="content">
                            hfgjfghjg
                         </div>
                    </div>
                </div>
            </div>
            <div className="imgLast">
                <div></div>
                <div></div>
            </div>
        </section>
        <section className="skills" id="skills">
            <div className="imgFirst">skill
                <div></div>
                <div></div>
            </div>
            <div className="imgLast">
                <div></div>
                <div></div>
            </div>
            <div className="imgFirst">
                <div></div>
                <div></div>
            </div>
            <div className="imgLast">
                <div></div>
                <div></div>
            </div>
        </section>
        <section className="projects" id="projects">
            projects
        </section>
        <section className="contact" id="contact">
            contact type
        </section>
      </main>
    </>
    )
}

export default Main;