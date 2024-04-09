





import React from "react";
import { BrowserRouter } from 'react-router-dom'
import {useTypewriter, Cursor } from 'react-simple-typewriter'
import { HashLink as Link } from "react-router-hash-link";
import './Main.css'
import resume from "../../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../../assets/AboutMe.png"

function Home(){
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Backend Developer'],
        loop:{},
    });
    return(
        <>
       <section id="home">
          <div className="grid homeImg" >
            <div >
                <h2>Hi, I am 
                    <p style={{fontWeight: 'bold', color: 'green'}}> {text} 
                       <span style={{width: '80px', color: 'green'}}>
                         <Cursor /> 
                        </span> 
                    </p>
                </h2>
                <div>
                   <a href={resume} download="Rediet Gashaw CV">
                    <button onClick={resume}>Download CV</button>
                    </a>
                    <BrowserRouter>
                    <Link className="menuItem" to='#contact'><button>Hire Me</button></Link>
                    </BrowserRouter>
                    
                </div>
            </div>
            {/* <div className="homeImg">
                <img src={aboutme} alt="" />
            </div> */}
          </div>
       </section>
        </>
    )
}
export default Home