import React, {useRef} from 'react';
import PropTypes from 'prop-types';



const AddForm = ({update}) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const cellRef = useRef();
    const emailRef = useRef('');


    function submitContact (e){
        e.preventDefault();
        const contact = {
            name: nameRef.current.value,
            lastname: lastnameRef.current.value,
            cellphone: cellRef.current.value,
            email: emailRef.current.value,
            state: false
        }
        update(contact);
        console.log(typeof cellRef.current.value.Number)
    };



    return (
        <div>
            <h3>
                Add Contact
            </h3>
            <form 
                onSubmit={submitContact} 
                className={'form-inline'}
            >
                    <div className={'row justify-content-md-center'}>
                        <div className={'col-md-2'}>
                                <input ref={nameRef} type={'text'} placeholder='Name' />
                        </div>
                        <div className={'col-md-2'}>
                                <input ref={lastnameRef} type={'text'} placeholder='Lastname'/>
                        </div>
                        <div className={'col-md-2'}>
                                <input ref={cellRef} type={'tel'} placeholder='Cellphone'/>
                        </div>
                        <div className={'col-md-2'}>
                                <input ref={emailRef} type={'email'} placeholder='E-mail'/>
                        </div>
                        <div className={'col-md-2'}>    
                                <button type={'submit'} className={'btn btn-primary'}>Add Contact</button>      
                        </div>
                    </div>
            </form>
        </div>
    );
};


AddForm.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    cellphone: PropTypes.number,
    email: PropTypes.string
};


export default AddForm;
