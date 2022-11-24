import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../MODELS/contact.class';


const ContactComponent = ({ contact, removeContact }) => {

    function remove() {
        removeContact(contact);
    }

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
                    {contact.state ? <button className={'btn btn-success'}>Online</button> : <button className={"btn btn-secondary"}>Offline</button>}
                </td>

                <td>
                    <button onClick={ remove } className={'btn btn-danger'}>Eliminar</button>
                </td>
            </tr>
        </tbody>
    );
};




ContactComponent.propTypes = {
 contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
