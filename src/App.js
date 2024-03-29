




import React, { useEffect, useRef, useState } from 'react';
import {FaBars, FaTimes } from "react-icons/fa"
import emailjs from '@emailjs/browser';

import aboutme from "./assets/AboutMe.png"
import experience from "./assets/experience.png"
import Education from "./assets/Education.png"
import cheackMark from "./assets/cheackMark.png"
import downArrow from "./assets/downArrow.png"
import linkdin from "./assets/linkdin.png"
import github from "./assets/github-logo.png"
import resume from "./assets/Rediet Gashaw-Resume.pdf"
import Typewriter from 'typewriter-effect'
import './App.css';
// import { editTodoTable } from '../../server/controllers/todoController';


function App() {
    const form = useRef();
    const navRef=useRef();
    const [isTypingRepeated, setIsTypingRepeated] = useState(false);
    const showNavBar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    const newTab=url=>{
        window.open(url)
    }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
         'service_xag7sub', 
         'template_voxg4ns', 
         form.current, 
         'QPZ7GD7FWaJqt3JzA')
        .then((result) => {
           alert("Message Sent");
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };
    useEffect(() => {
        setIsTypingRepeated(false);
      }, [isTypingRepeated]);
  return (
    <div className="App">
      <div className='container'>
        <nav id="desktopNav">
          <div className="logo">Rediet Gashaw</div>
          <div ref={navRef} className='nav'>
            <ul className="navLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#exprience">Exprience</a></li>
             
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}><FaTimes /></button>
          </div>
          <button className='nav-btn' onClick={showNavBar}><FaBars/></button>
        </nav>
         <div className="home" id='home'>
            <div className="cols col0">
                <span className="topline">Hello</span>
                <h1>I'm 
                    <span  >
                        <Typewriter
                        
                          onInit={(typewriter)=>{
                            typewriter
    
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Frontend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Backend developer")
                             .pauseFor(1000)
                             .deleteAll()
                             .typeString("Full stack developer")
                             .pauseFor(1000)
                             .deleteAll()
                            
                             .start(
                                
                             )
                                
                           
                          }}
                        />
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
            <div className="cols col1">
                <div className="imgBox">
                    
                    <img src={aboutme} />
                </div>
            </div>
        </div>
        <section id="about" className='about'>
        <p class="p1">Get To Konow More</p>
        <h1 class="title">About Me</h1>
        <div class="sectionContainer">
            <div class="aboutSectionText">
                    <p className='aboutp'>
                Enthusiastic and motivated fresh Software Engineering graduate from Bahir Dar University with strong
                problem-solving skills and commitment to excellence, seeking an entry-level role in software and IT.
                Excited to use my skills and educational training to support the technology and add value while learning
                and advancing forward in knowledge and experience. I am very committed to delivering excellence and
                helping my employer as well as myself. I have acquired knowledge in programming languages such as
                React, Node.js, MySQL, HTML, CSS, JavaScript, and GitHub, as well as hands-on experience with
                Property management systems and Patient management systems.
                </p>
            </div>  
            <div class="aboutDetailsContainer">
                <div class="aboutContainers">
                    <div class="detailsContainer">
                        <img
                          src={experience}
                          alt="Exprience Icon"
                          class="icon"/>
                        <h3>Exprience</h3>
                        <p>During my internship at IPDC, I worked on a property
management system using React, Node.js, and MySQL</p>
                    </div>
                    <div class="detailsContainer">
                        <img
                          src={Education}
                          alt="Education Icon"
                          class="icon"/>
                        <h3>Education</h3>
                        <p>B.Sc Bachelors Degree Software Engineering</p>
                    </div>
                </div>
             
     
            </div>            
        </div> 
        <div className='downarrow'>
        <a href="#exprience">
            <img src={downArrow} 
             alt="Down Arrow"
             class="icon arrow"
             onclick="location.href='./#exprience'"/> 
             </a>
        </div>
             
    </section>
    <section id="exprience" className='exprience'>
        <p class="p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="exprianceDetailsContainer">           
            <div class="aboutContainers">
               <div class="detailsContainer">
                    <h2 class="experienceSubTitle">Frontend Development</h2>
                    <div class="articleContainer">
                        <div className='column'>
                            <article>
                                <img src={cheackMark}
                                    alt="Experience Icon"
                                    class="icon"/>
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Exprienced</p>
                                    </div>
                            </article>
                            <article>
                            <img src={cheackMark}
                                    alt="Experience Icon"
                                    class="icon"/>
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Exprienced</p>
                                    </div>
                            </article>
                        </div>
                        <div className='column'>
                            <article>
                            <img src={cheackMark}
                                    alt="Experience Icon"
                                    class="icon"/>
                                    <div>
                                        <h3>React</h3>
                                        <p>Intermediate</p>
                                    </div>
                            </article>
                            <article>
                            <img src={cheackMark}
                                    alt="Experience Icon"
                                    class="icon"/>
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Basic</p>
                                    </div>
                            </article>
                        </div>
                    
                    </div>
               </div>     
               <div class="detailsContainer">
                <h2 class="experienceSubTitle">Backend Development</h2>
                <div class="articleContainer">
                  <div className='column'>
                        <article>
                        <img src={cheackMark}
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>MySQL</h3>
                                    <p>Exprienced</p>
                                </div>
                        </article>
                        <article>
                        <img src={cheackMark}
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Intermediate</p>
                                </div>
                        </article>
                    </div>
                    <div className='column'>
                        <article>
                        <img src={cheackMark}
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>Express JS</h3>
                                    <p>Intermediate</p>
                                </div>
                        </article>
                        <article>
                        <img src={cheackMark}
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                        </article> 
                    </div>                        
                </div>
           </div>                    
           </div>
        </div>      
        <div className='downarrow'>
        <a href="#contact">
            <img src={downArrow} 
            alt="Down Arrow"
            class="icon arrow"
            onclick="location.href='./#projects'"/> 
            </a>
        </div>
    </section>
    <section class="contact" id="contact">
    <p class="p1">To Find</p>
        <h1 class="title">Contactme On</h1>
        
        <div class="contactDetailsContainer">           
            <div class="aboutContainers">
            <div class="detailsContainer">
                    <h3 >contact info</h3>
                    <div class="info">
                        <h3>Email:   redietgash21@gmail.com</h3>
                        <h3>Phone:    +251936208599</h3>
                        <h3>Address:    Addis Ababa,Ethiopia</h3>
                         <div id="socialsContainer">
                <img src={linkdin}
                     alt="My linkedin Profile"
                     class="icon"
                     onClick={()=> newTab('https://www.linkedin.com/in/rediet-gashaw/')}
                    />
                <img src={github}
                alt="My linkedin Profile"
                class="icon"
                onClick={()=> newTab('https://github.com/redietgash21')}
               />
            </div>
                    </div>
            </div>
          
            <div class="detailsContainer">
                
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="name" class="box" name="user_name"/>
                <input type="email" placeholder="email" class="box" name="user_email"/>
                <input type="text" placeholder="project" class="box" name="project_name"/>
                <textarea name="message" id="" cols="30" rows="10" class="box message"
                placeholder="message" >

                </textarea>
                <button type="submit" class="btn" value="Send" >Send </button>
            </form>
            {/* 
      <label>Name</label>
      <input type="text"  />
      <label>Email</label>
      <input type="email"  />
      <label>Message</label>
      <textarea  />
      <input type="submit" />
    </form> */}
            </div>
            </div>
            </div>
        
     </section>
    <footer>
        <nav>
            <div class="navLinksContainer">
                <ul class="navLinks">
                <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#exprience">Exprience</a></li>
                    
                    <li><a href="#contact">Contact</a></li>
                </ul>   
            </div>
        </nav>
        <p>Copyright &#169; 2023 Rediet Gashaw. All Rights Reserved.</p>
    </footer>
    
      </div>   
    </div>
  );
}

export default App;
