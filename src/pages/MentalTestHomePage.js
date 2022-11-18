import React from 'react';
import Navigation from '../components/Navigation';
import StartMentalTest from '../components/MentalTestItem/StartMentalTest';
import Footer from '../components/Footer';

const MentalTestHomePage = () => {
    return (
        <div className=''>
            <Navigation />
            <StartMentalTest />
            <Footer />
        </div>
    )
};

export default MentalTestHomePage;