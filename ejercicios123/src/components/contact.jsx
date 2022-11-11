import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            onLine : false
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Contact information
                </h1>
                <h3>
                    Nombre {this.props.name}
                </h3>
                <h3>
                    Apellido {this.props.lastname}
                </h3>
                <h3>
                    Mail {this.props.mail}
                </h3>
                <h3>
                    Estado : {this.state.onLine ? 'Contacto En Línea' :'Contacto No Disponible'}
                </h3>
                <button onClick={this.changeState}>
                    Change state!
                </button>
            </div>
        );
    };

    changeState = () => {
        this.setState((prevState) => (
            {
                onLine : !prevState.onLine
            }
        ))
    } 


};


Contact.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    mail: PropTypes.string,
    onLine: PropTypes.bool
};


export default Contact;
