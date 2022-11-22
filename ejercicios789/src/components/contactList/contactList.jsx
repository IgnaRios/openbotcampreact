import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact/contact';
import AddForm from '../form/addForm';
import TableHeader from '../contact/tableHeader';


const ContactList = () => {

    const [contact, setContact] = useState({
        name: 'nacho',
        lastname: 'rios',
        cellphone: 1123287499,
        email:'ignaciocruzrios@gmail.com',
        state: false
    });

    function createContact(newContact){
        setContact(newContact)
    };



    return (
        <div>
            <h1>
                Contact List
            </h1>
            <div>
                <AddForm update={createContact}/>
            </div>
            <div className={'table-responsive-sm'}>
                <table className={'table table-sm'}>
                    <TableHeader />
                    <Contact contact={contact} />
                </table>  
            </div>
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;
