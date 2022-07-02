import React from 'react';
import './Services.css';
import Card from './Card/Card';
import analyticsImage from './analytics.jpeg';
import brandingImage from './branding.jpeg';
import strategyImage from './strategy.jpeg';

class Services extends React.Component {

    render() {
        const analyticsDescription = 'Identify weaknesses of your business and find the most effective solution.';
        const analyticsTitle = 'Analytics';
        const brandingDescription = 'Build a strong brand around your business to evolve and scale up.';
        const brandingTitle = 'Branding';
        const strategyDescription = 'We find all the ways to achieve your business goals and grow fast.';
        const strategyTitle = 'Strategy';

        return (
            <div className='services container' id='services'>
                <h2 className='services-title'>Our Services</h2>
                <p className='services-text'>We provide all kind of services for small and micro businesses:</p>
                <div className='services-cards'>
                    <Card image={analyticsImage} title={analyticsTitle} description={analyticsDescription}></Card>
                    <Card image={brandingImage} title={brandingTitle} description={brandingDescription}></Card>
                    <Card image={strategyImage} title={strategyTitle} description={strategyDescription}></Card>
                </div>
            </div >
        );
    }
}

export default Services;