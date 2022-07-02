import React from "react";
import('./Contact.css')

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-data">
                <h4 className="contact-data-title">{this.props.title}</h4>
                <p className="contact-data-text">{this.props.text}</p>
            </div >
        );
    }

}

export default Contact;