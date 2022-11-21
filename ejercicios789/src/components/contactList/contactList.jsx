import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact/contact';


const ContactList = () => {





    return (
        <div className={"d-flex flex-column"}>
            <h1 className={"p-2"}>
                Contact List
            </h1>
            <div className={"p-2"}>
                <div>
                    <h3>
                        Add Contact
                    </h3>
                    <form className={'d-flex justify-content-center'}>
                        <tr>
                            <th>
                                <input type={'text'} placeholder='Name' />
                            </th>
                            <th>
                                <input type={'text'} placeholder='Lastname'/>
                            </th>
                            <th>
                                <input type={'tel'} placeholder='Cellphone'/>
                            </th>
                            <th>
                                <input type={'email'} placeholder='E-mail'/>
                            </th>
                            <th>
                                <button className={'btn btn-primary'}>Add</button>
                            </th>
                        </tr>
                    </form>
                </div>
            </div>
            <table className={"p-2"}>
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
                        Estate
                    </th>
                                
                    <th>
                        Delete
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
