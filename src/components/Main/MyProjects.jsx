





import React from "react";
import DesignYourCV from '../../assets/DesignYourCV.PNG';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'


function MyProjects(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };
    return(
        <>
         <section id="projects">
            <h2>My Projects</h2>
              <Carousel responsive={responsive}>
              <div >
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
                        <button>Demo</button>
                            <button>GitHub</button>
                        </div>
                            
                        </div>
                    </div>

                    </div>
                    
                </div>
              <div >
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div >
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div >
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div >
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div >
                    <p>Design Your CV</p>
                    <div style={{
                        height: '80vh',
                        width:'400px',
                    backgroundImage: `url(${DesignYourCV})`,
                    backgroundSize:'cover'
                    
                     }}>
                        
                        <div>
                            <button>Demo</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                    
                </div>
              </Carousel>
              

           
         </section>
        </>
    )
}
export default MyProjects