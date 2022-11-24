import React, { useState } from 'react';
import ContactComponent from '../contact/contactComponent';
import AddForm from '../form/addForm';
import TableHeader from '../contact/tableHeader';
import { Contact } from '../../MODELS/contact.class';



const ContactList = () => {

    const defaultContact = new Contact (
        'Nacho',
        'Ríos',
        '1123287499', 
        'ignaciocruzrios@gmail.com', 
        false
    );

    const [contacts, setContacts] = useState([defaultContact]);

    function createContact(newContact){
        const tempContacts = [...contacts];
        tempContacts.push(newContact)
        setContacts(tempContacts);
    };

    return (
        <div>
            <h1>
                Contact List
            </h1>
            <div>
                <AddForm 
                    update={createContact}
                />
            </div>
            <div className={'table-responsive-sm'}>
                <table className={'table table-sm'}>
                    <TableHeader />
                    <ContactComponent contacts={contacts} />
                </table>  
            </div>
        </div>
    );
};



export default ContactList;
