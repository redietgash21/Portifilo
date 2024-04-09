





import React from "react";
import DesignYourCV from '../../assets/DesignYourCV.PNG';
import one from '../../assets/1.PNG';

import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

function MyProjects(){
  
    return(
        <>
         <section id="projects">
            <h2>My Projects</h2>
              <div className="grid" >
              <div className="gap">
                    <p>Design Your CV</p>
                    <div className="card">
                    <div style={{
                        height:'80vh',
                        width:'100%',
                        objectFit: 'contain',
                    backgroundImage: `url(${DesignYourCV})`,
                    backgroundSize:'cover'
                    
                     }}>
                        
                        <div className="cardFooter">
                        <div className="social">
                        <div className="social">
                                <span className="socialIcon">
                                    <a href="https://redietgash21.github.io/CVGenerater" target="_blank"><TbWorldWww/></a>
                                </span>
                                <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://github.com/redietgash21/CVGenerater">
                                        <FaGithub />
                                    </a>
                                </span>
                                
                            </div>
                        </div>
                            
                        </div>
                    </div>

                    </div>
                    
                </div>
                <div className="gap">
                    <p>Patient managment system</p>
                    <div className="card">
                    <div style={{
                        height:'80vh',
                        width:'100%',
                        objectFit: 'contain',
                    backgroundImage: `url(${one})`,
                    backgroundSize:'cover'
                    
                     }}>
                        
                        <div className="cardFooter">
                        <div className="social">
                        <div className="social">
                                <span className="socialIcon">
                                    <a href="" target="_blank"><TbWorldWww/></a>
                                </span>
                                <span className="socialIcon">
                                    <a  target="-blank"
                                    href="">
                                        <FaGithub />
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
        </>
    )
}
export default MyProjects