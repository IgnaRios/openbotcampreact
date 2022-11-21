import React from 'react';
import PropTypes from 'prop-types';


const Contact = () => {
    return (
        <tbody>
            <tr>
                <td>
                    Nacho
                </td>

                <td>
                    Ríos
                </td>

                <td>
                    011-2328-7499
                </td>

                <td>
                    ignaciocruzrios@gmail.com
                </td>

                <td>
                    {true ? <button className={'btn btn-success'}>Online</button> : <button className={"btn btn-secondary"}>Offline</button>}
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
