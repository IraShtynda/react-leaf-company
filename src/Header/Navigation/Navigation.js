import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isClosed: false
        };

    }

    render() {

        console.log(this)

        return (
            <div className='navigation container'>
                <a className='logo' href='#header'>Leaf Company</a>
                <a className='navigation-item' href='#contacts'>CONTACTS</a>
                <div className='socials'>
                    <a className='socials-item' href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className='socials-item' href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='socials-item' href='https://www.facebook.com'><FontAwesomeIcon icon={faYoutube} /></a>
                    {
                        (this.state.isClosed)
                            ? <FontAwesomeIcon icon={faBars} onClick={this.onBurgerClick.bind(this)} />
                            : <FontAwesomeIcon icon={faXmark} onClick={this.onBurgerClick.bind(this)} />
                    }
                </div>
            </div>
        );
    }

    onBurgerClick() {
        this.setState({
            isClosed: !this.state.isClosed
        })
    }
}

export default Navigation;