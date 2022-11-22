import React from 'react';
import PropTypes from 'prop-types';


const Contact = ({contact}) => {



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
                    <button className={'btn btn-danger'}>Eliminar</button>
                </td>
            </tr>
        </tbody>
    );
};


Contact.propTypes = {

};


export default Contact;
