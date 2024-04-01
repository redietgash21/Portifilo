





import React from 'react'
import './MobileNav.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
import { MdClose } from "react-icons/md";
import Logo from '../assets/Logo.PNG'
function MobileNav({isOpen, toggleMenu}){
    return(
        <>
      
        <div className={`mobile-menu  ${ isOpen ? "active":""}`}
             onClick={toggleMenu}
        >
           <div className='mobile-menu-container'>
           <img src={Logo} className='imgLogo'/>
           <ul>
                    <li><Link className="menuItem" to='#home'>Home</Link></li>
                    <li><Link className="menuItem" to='#about'>About</Link></li>
                    <li><Link className="menuItem" to='#skills'>Skills</Link></li>
                    <li><Link className="menuItem" to='#projects'>Projects</Link></li>             
                    <li><Link className="menuItem" to='#contact'>Contact</Link></li>
                    <button className='DLModeBtn'><MdClose/></button>
                    
                </ul>
           </div>
        </div>
      
        
        </>
    )
}
export default MobileNav