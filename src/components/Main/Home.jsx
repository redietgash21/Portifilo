





import React from "react";
import {useTypewriter, Cursor } from 'react-simple-typewriter'
import './Main.css'
import resume from "../../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../../assets/AboutMe.png"

function Home(){
    const [text] = useTypewriter({
        words: ['FrontendDeveloper', 'brontendDeveloper'],
        loop:{},
    });
    return(
        <>
       <section id="home">
          <div className="grid">
            <div >
                <h2>Hi, I am 
                    <p style={{fontWeight: 'bold', color: 'green'}}> {text} 
                       <span style={{width: '80px', color: 'green'}}>
                         <Cursor /> 
                        </span> 
                    </p>
                </h2>
                <div>
                    <button onClick={resume}>Download CV</button>
                    <button>Hire Me</button>
                </div>
            </div>
            <div className="homeImg">
                <img src={aboutme} alt="" />
            </div>
          </div>
       </section>
        </>
    )
}
export default Home