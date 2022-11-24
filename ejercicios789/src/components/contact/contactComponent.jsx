import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../MODELS/contact.class';


const ContactComponent = ({ contact, removeContact, updateStatus }) => {

    function remove() {
        removeContact(contact);
    };

    function update (){
        updateStatus(contact);
    };

    return (
        <tbody>
            <tr>
                <td>
                    {contact.name}
                </td>

                <td>
                    {contact.lastname}
                </td>

                <td>
                    {contact.cellphone}
                </td>

                <td>
                    {contact.email}
                </td>

                <td>
                    {
                    contact.state 
                    ?  <button onClick={ update } className={'btn btn-success'}>Conectado</button> 
                    : <button onClick={ update } className={"btn btn-secondary"}>Desconectado</button>
                    }
                </td>

                <td>
                    <button onClick={ remove } className={'btn btn-danger'}>Eliminar</button>
                </td>
            </tr>
        </tbody>
    );
};




ContactComponent.propTypes = {
 contact : PropTypes.instanceOf(Contact),
 remove : PropTypes.func,
 update : PropTypes.func
};


export default ContactComponent;
