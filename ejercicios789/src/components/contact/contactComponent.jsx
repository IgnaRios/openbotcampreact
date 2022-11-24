import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../MODELS/contact.class';


const ContactComponent = ({contacts}) => {

const contactList = contacts.map((contact) => {
            return(
                    <tr key={contact.index}>
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
                            <button className={'btn btn-danger'}>Eliminar</button>
                        </td>
                    </tr>
            )})

    return (
        <tbody>
            {contactList}
        </tbody>
    );
};


ContactComponent.propTypes = {
 contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
