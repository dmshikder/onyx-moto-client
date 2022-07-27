import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import EnvironmentalImprovement from './EnvironmentalImprovement';
import MotoParts from './MotoParts';
import QualityAssurance from './QualityAssurance';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MotoParts/>
            <QualityAssurance/>
            <EnvironmentalImprovement/>
            <BusinessSummary/>
            <Reviews/>
            
            
        </div>
    );
};

export default Home;