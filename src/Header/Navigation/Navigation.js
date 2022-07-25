import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Navigation.css';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isClosed: false
        };

    }

    render() {

        return (
            <div className='navigation container'>
                <a className='logo' href='#header'>Leaf Company</a>
                <a className='navigation-item' href='#contacts'>CONTACTS</a>
                <div className='socials'>
                    <a className='socials-item' href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className='socials-item' href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='socials-item' href='https://www.facebook.com'><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        );
    }

}

export default Navigation;