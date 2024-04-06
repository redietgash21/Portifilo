





import React, { useState } from 'react'
import './Header.css';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
import { MdLightMode } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import Logo from '../assets/Logo.PNG'
import MobileNav from './MobileNav';
function Header(){
  const [openMenu, setOpenMenu]=useState(false);

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };
    return(
        <>

        <BrowserRouter>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
          <header>
          <nav className='navWrapper'> 
           <div className="navContent">
            <span className='headerLogo'>Rediet Gashaw</span>
            <img src={Logo} className='imgLogo' alt='logo'/>
                           
                <ul>
                    <li><Link className="menuItem" to='#home'>Home</Link></li>
                    <li><Link className="menuItem" to='#about'>About</Link></li>
                    <li><Link className="menuItem" to='#skills'>Skills</Link></li>
                    <li><Link className="menuItem" to='#projects'>Projects</Link></li>             
                    <li><Link className="menuItem" to='#contact'>Contact</Link></li>
                    <button className='Dv.LModeBtn'><MdLightMode/></button>
                    
                </ul>
                <button className="menuBtn" onClick={toggleMenu}>
                    <span className={'material-symbols-outlined'}
                    style={{fontSize:"1.8rem"}}>
                      {openMenu?<MdClose/>:<TiThMenuOutline/>}
                      </span>
                  </button> 
            
              </div>
            </nav>
          </header>
        </BrowserRouter>
        </>
    )
}
export default Header