





import React from 'react'
import './Header.css';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
function Header(){
    return(
        <>
        <BrowserRouter>
          <header>
         
            <span className='headerLogo'>Rediet Gashaw</span>
            <nav>                
                <ul>
                    <li><a href=""><Link to='#home'>Home</Link></a></li>
                    <li><a href=""><Link to='#about'>About</Link></a></li>
                    <li><a href=""><Link to='#skills'>Exprience</Link></a></li>
                    <li><a href=""><Link to='#projects'>Projects</Link></a></li>             
                    <li><a href=""><Link to='#contact'>Contact</Link></a></li>
                    <button className='DLModeBtn'></button>
                </ul>
                
            </nav>
          </header>
        </BrowserRouter>
        </>
    )
}
export default Header