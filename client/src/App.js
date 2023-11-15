




import { useEffect } from 'react';
import aboutme from "./AboutMe.png"
import experience from "./experience.png"
import Education from "./Education.png"
import './App.css';
// import { editTodoTable } from '../../server/controllers/todoController';


function App() {
  
    useEffect(() => {
 
    },[])
  return (
    <div className="App">
      <div className='container'>
        <nav id="desktopNav">
          <div class="logo">Rediet Gashaw</div>
          <div >
            <ul class="navLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#exprience">Exprience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
         <div class="wrapper">
            <div class="cols col0">
                <span class="topline">Hello</span>
                <h1>I'm <span class="multiText"></span></h1>
          
                <div class="btns">
                    <button>download CV</button>
                    <button>hire me</button>
                </div>
            </div>
            <div class="cols col1">
                <div class="imgBox">
                    
                    <img src={aboutme} />
                </div>
            </div>
        </div>
        <section id="about">
        <p class="sectionTextp1">Get To Konow More</p>
        <h1 class="title">About Me</h1>
        <div class="sectionContainer">
            <div class="sectionPicContainer">
                    <p className='homep'>
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
                        <p>2+ years Fullstack developer</p>
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
                <div class="textContainer">
                    <p>Your Image Is Starting To Download Automatically Now.
                        Unleash Your Creativity, Let Your Design Come to Life Instantly
                        TopPNG.</p>
                </div>
     
            </div>            
        </div> 
        <img src="./assets/downArrow.png" 
             alt="Down Arrow"
             class="icon arrow"
             onclick="location.href='./#exprience'"/>      
    </section>
    <section id="exprience">
        <p class="sectionTextp1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="exprianceDetailsContainer">           
            <div class="aboutContainers">
               <div class="detailsContainer">
                    <h2 class="experienceSubTitle">Frontend Development</h2>
                    <div class="articleContainer">
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                 class="icon"/>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Exprienced</p>
                                </div>
                        </article>
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Exprienced</p>
                                </div>
                        </article>
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>SASS</h3>
                                    <p>Intermediate</p>
                                </div>
                        </article>
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                        </article>
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>TypeScript</h3>
                                    <p>Basic</p>
                                </div>
                        </article>
                        <article>
                            <img src="./assets/cheackMark.png" 
                                alt="Experience Icon"
                                class="icon"/>
                                <div>
                                    <h3>Material UI</h3>
                                    <p>Intermediate</p>
                                </div>
                        </article>
                    </div>
               </div>     
               <div class="detailsContainer">
                <h2 class="experienceSubTitle">Backend Development</h2>
                <div class="articleContainer">
                    <article>
                        <img src="./assets/cheackMark.png" 
                            alt="Experience Icon"
                            class="icon"/>
                            <div>
                                <h3>MySQL</h3>
                                <p>Exprienced</p>
                            </div>
                    </article>
                    <article>
                        <img src="./assets/cheackMark.png" 
                            alt="Experience Icon"
                            class="icon"/>
                            <div>
                                <h3>Node JS</h3>
                                <p>Intermediate</p>
                            </div>
                    </article>
                    <article>
                        <img src="./assets/cheackMark.png" 
                            alt="Experience Icon"
                            class="icon"/>
                            <div>
                                <h3>Express JS</h3>
                                <p>Intermediate</p>
                            </div>
                    </article>
                    <article>
                        <img src="./assets/cheackMark.png" 
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
    
    <img src="./assets/downArrow.png" 
    alt="Down Arrow"
    class="icon arrow"
    onclick="location.href='./#projects'"/> 
    </section>
    
      </div>   
    </div>
  );
}

export default App;
