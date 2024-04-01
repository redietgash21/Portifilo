






import React from "react";

import resume from "../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../assets/AboutMe.png"

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
        <section className="about" id="about">
            <div className="imgFirst">about
                <div></div>
                <div></div>
            </div>
            <div className="imgLast">
                <div></div>
                <div></div>
            </div>
        </section>
        <section className="exprience" id="exprience">
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