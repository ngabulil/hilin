import React from 'react';
import { useLocation } from "react-router-dom";
import Navigation from '../components/Navigation';
import MentalTestResult from '../components/MentalTestItem/MentalTestResult';
import Footer from '../components/Footer';

function MentalTestSummaryPage() {
    const location = useLocation();

    return (
        <div className=''>
            <Navigation />
            <MentalTestResult result={location.state.correct}/>
            <Footer />
        </div>
    )
}

export default MentalTestSummaryPage;