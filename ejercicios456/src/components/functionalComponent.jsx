import React, {useState, useEffect} from 'react';

const FunctionalComponent = () => {

    const [persona, setPersona] = useState({
      fecha: new Date(),
      edad: 0,
      nombre: 'Nacho',
      apellido: 'Ríos'  
    });

    const tick = () => {
        setPersona({
           ...persona,
            fecha: new Date(),
            edad : persona.edad + 1
        });
    }

    useEffect(() => {
       const timerID = () =>{
            setInterval(
                ()=> tick(), 1000
            )
       };
       return(
       timerID())
    },);

    return (
        <div>
        <h2>
         Hora Actual:
         {persona.fecha.toLocaleTimeString()}
         </h2>
         <h3>{persona.nombre} {persona.apellido}</h3>
         <h1>Edad: {persona.edad}</h1>
         <button onClick={detenerReloj}>DETENER</button>  
        </div>
    );
    
    function detenerReloj (){
        clearInterval( () =>{
            setPersona({
                ...persona, 
                fecha: new Date(),
                edad : persona.edad
            })
        });
    }
}

export default FunctionalComponent;
