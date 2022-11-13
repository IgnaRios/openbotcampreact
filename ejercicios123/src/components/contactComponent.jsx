import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactStatus from './contactStatus';


class ContactComponent extends Component {
    
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
                <ContactStatus />

            </div>
        );
    };

};


ContactComponent.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    mail: PropTypes.string,
    conectado: PropTypes.bool
};


export default ContactComponent;
