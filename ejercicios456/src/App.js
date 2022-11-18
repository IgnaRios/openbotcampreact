import React, { useState } from 'react';
import './App.css';
import Clock from './components/classComponent';
import FunctionalComponent from './components/functionalComponent';


function App() {

  const [state, setState] = useState(false);

  return (
    <div className="App">

      {state ? <Clock /> : <FunctionalComponent /> }
       
      <button onClick={cambiarComponente}>{state ? 'Cambiar componente componente funcioanl' : 'cambiar a componente clase'}</button>
    </div>
  );
  
  function cambiarComponente () {
    setState(!state)
  }

}

export default App;
