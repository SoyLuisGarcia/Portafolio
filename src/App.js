import React from 'react';
import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Pestañas from './components/Pestañas';
import Sectio from './components/Sectio';
import SectioAbout from './components/SectioAbout';
import Contact from './components/Contact';
import Position from './components/Position';
import Position2 from './components/Position2';
import Modal1 from './components/Modal1';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';
import Modal6 from './components/Modal6';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         
          
        <Navigation/>
        <Pestañas/>
        <Sectio/>
        <SectioAbout/>
        <Contact/>
        <Position/>
        <Position2/>
        <Modal1/>
        <Modal2/>
        <Modal3/>
        <Modal4/>
        <Modal5/>
        <Modal6/>

        
      </header> 
      
       
      
    </div>


  );
}

export default App;
