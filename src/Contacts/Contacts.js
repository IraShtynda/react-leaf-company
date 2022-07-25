import React from 'react';
import './Contacts.css';
import Contact from './Contact/Contact';

class Contacts extends React.Component {
    render() {

        const adressTitle = 'Address';
        const adressText = '999 Jamaica Ave, Brooklyn, \nNY 11208, USA';
        const hoursTitle = 'Hours';
        const hoursText = 'Monday - Saturday: 11 AM - 9 PM \nSunday: 11 AM - 7 PM';
        const contactsTitle = 'Contacts';
        const contactsText = '+1 (234) 567 89 00 \nleafcompany @email.com';

        return (
            <div className='contacts' id='contacts'>
                <div className='container'>
                    <div className='contacts-content'>
                        <h2 className='contacts-title'>Contacts</h2>
                        <p className='contacts-text'>Though our website is under construction, you can always call us, write us or simply visit us. Fill out the form to get the best personalized offers by mail.</p>
                        <Contact title={adressTitle} text={adressText}></Contact>
                        <Contact title={hoursTitle} text={hoursText}></Contact>
                        <Contact title={contactsTitle} text={contactsText}></Contact>
                    </div>
                    <form className='contacts-form' onSubmit={this.onSubmitClicked}>
                        <input className='contact-input' type='text' placeholder='Name*'></input>
                        <input className='contact-input' type='email' placeholder='E-mail*'></input>
                        <input className='button btn-submit' type='submit' value='Receive Offers'></input>
                    </form>
                </div>
            </div >
        );
    }

    onSubmitClicked(e) {
        e.preventDefault();
        console.log('clicked');
    }

}

export default Contacts;