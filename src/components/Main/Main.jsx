





import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function Main(){

    return(
    <>
      <main>
        <Home/>
        <Aboutme/>
        <MySkills/>
        <MyProjects/>
        <ContactMe/>
      </main>
    </>
    )
}

export default Main;