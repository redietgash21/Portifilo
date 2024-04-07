





import React from "react";
import DesignYourCV from '../../assets/DesignYourCV.PNG'
import './Main.css'

function MyProjects(){
    return(
        <>
         <section id="projects">
            <h2>My Projects</h2>
            <div className="grid">
                <div className="container">
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div className="container">
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>
                <div className="container">
                    <p>Design Your CV</p>
                    <img src={DesignYourCV} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>GitHub</button>
                    </div>
                </div>

            </div>
         </section>
        </>
    )
}
export default MyProjects