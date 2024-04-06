





import React from "react";
import './Main.css'
import resume from "../../assets/Rediet Gashaw-Resume.pdf"
import aboutme from "../../assets/AboutMe.png"

function Home(){
    return(
        <>
       <section id="home">
        <div >
            <h2>Hi, I am <p> Front end developer </p>
             </h2>
            <div>
                <button onClick={resume}>Download CV</button>
                <button>Hire Me</button>
            </div>
        </div>
        <div>
            <img src={aboutme} alt="" />
        </div>
       </section>
        </>
    )
}
export default Home