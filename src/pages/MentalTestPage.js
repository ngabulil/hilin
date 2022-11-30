import React from 'react';
import Navigation from '../components/Navigation';
import QuestionMentalTest from '../components/MentalTestItem/QuestionMentalTest';
import Footer from '../components/Footer';

function MentalTestPage() {
    return (
        <div className=''>
            <Navigation />
            <QuestionMentalTest />
            <Footer />
        </div>
    )
}

export default MentalTestPage;