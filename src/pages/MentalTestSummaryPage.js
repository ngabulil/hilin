import React from 'react';
import { useLocation } from "react-router-dom";
import Navigation from '../components/Navigation';
import MentalTestSummary from '../components/MentalTestItem/MentalTestSummary';
import Footer from '../components/Footer';

function MentalTestSummaryPage() {
    const location = useLocation();

    return (
        <div className=''>
            <Navigation />
            <MentalTestSummary result={location.state.correct}/>
            <Footer />
        </div>
    )
}

export default MentalTestSummaryPage;