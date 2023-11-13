




import { useEffect } from 'react';

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
                <p>ehwf gehgu vbebebg vkahfwk kBFJKHWEUIRREU DHGVNN
                    SFJSdnh  fhjdbfdvsddnbuigh dhfjd dkjhafjlhg ksjdfs
                    sdhs hjhgbjsdbscdggdnvjdbkd df bfbkjfkdbv dbhbvsbva
                    
                </p>
                <div class="btns">
                    <button>download CV</button>
                    <button>hire me</button>
                </div>
            </div>
            <div class="cols col1">
                <div class="imgBox">
                    <img src="violet.png"  id="splash"/>
                    <img src="aboutMe.png" />
                </div>
            </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
