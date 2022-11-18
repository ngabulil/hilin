import React from 'react';

const MentalTestSummary = ({ result }) => {
    return (
        <div className='mentaltest-page'>
            <div className='summary-mentaltest-container'>
                Mental Test Summary. Test anda benar {result}
            </div> 
        </div>
    )
}

export default MentalTestSummary;