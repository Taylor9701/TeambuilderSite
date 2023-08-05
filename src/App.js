import React, { useState, useEffect } from 'react'
import './App.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import Roster from './Roster.js';

function App() {
  const [screenSize, setScreenSize] = useState(getScreen());



  function getScreen(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getScreen())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    
    <div className="Roster">
      <h1>Roster</h1>
      <Roster/>
    </div>
  );
}


export default App;
