import React from 'react';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className='header' id='header'>
                <Navigation />
                <Banner />
            </div>
        );
    }
}

export default Header;