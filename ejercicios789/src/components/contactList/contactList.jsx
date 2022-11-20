import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact/contact';


const ContactList = () => {





    return (
        <div>
            <table>
                <tr>
                    <th>
                        Name
                    </th>

                    <th>
                        LastName
                    </th>

                    <th>
                        Cellphone
                    </th>

                    <th>
                        Email
                    </th>

                    <th>
                        Action Online/Offline
                    </th>
                                
                    <th>
                        Delete Contact
                    </th>
                </tr>
                <Contact />
            </table>
            
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;
