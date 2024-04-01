




import React, { useEffect, useRef, useState } from 'react';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


import './App.css';
// import { editTodoTable } from '../../server/controllers/todoController';
import LDmode from './assets/cheackMark.png'
import { BrowserRouter } from 'react-router-dom';


function App() { 
  return (
   <>
      
        <Header />
        <Main/>
        <Footer/>
     
    </>
  );
}

export default App;
