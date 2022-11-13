import React, {useState} from 'react';
import PropTypes from 'prop-types';



const ContactStatus = () => {

    const [conectado, setConectado ] = useState(false)

    const changeState = () => {
        setConectado(!conectado)
    };

    return (
        <div>
            <h3>
                Estado : {conectado ? 'Contacto En Línea' :'Contacto No Disponible'}
            </h3>
            <button onClick={changeState}>
                Change state!
            </button>     
        </div>
    );

};


ContactStatus.propTypes = {
state : PropTypes.bool
};


export default ContactStatus;
