import React from 'react';
import './Banner.css';

class Banner extends React.Component {

    render() {
        return (
            <div className='banner container'>
                <p className='banner-subtitle'>This website is under construction until August'19 but...</p>
                <h1 className='banner-title'>We'll be back very soon</h1>
                <p className='banner-text'>and you still can order our services or subscribe for the best offers!</p>
                <div>
                    <button className='button btn-outline'><a href='#services'>Our Services</a></button>
                    <button className='button btn-active'><a href='#contacts'>Receive Offers</a></button>
                </div>
            </div>
        );
    }
}
export default Banner;
