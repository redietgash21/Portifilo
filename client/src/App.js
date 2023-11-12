




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
      </div>   
    </div>
  );
}

export default App;
