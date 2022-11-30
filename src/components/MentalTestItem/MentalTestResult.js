import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../style/MentalTestPage.css';

const MentalTestResult = () => {
    const location = useLocation();
    const { finalResult } = location.state;
    const [condition, setCondition] = useState('');
    console.log(finalResult)

    useEffect(() => {
        if(finalResult>=0 && finalResult<=350) {
            setCondition('Cenderung Stabil');
        } else if(finalResult>=400 && finalResult<=600) {
            setCondition('Stres Ringan');
        } else if(finalResult>=650 && finalResult<=900) {
            setCondition('Depresi');
        } else if(finalResult>=950 && finalResult<=1300) {
            setCondition('Depresi, Stres, dan Cemas');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className='mentaltest-page'>
            <div className='result-mentaltest-container'>
                <p className='result-mentaltest-condition'>Kondisimu {condition}</p>
                <div className='result-mentaltest-description'>
                    <p>Jika kondisi kamu termasuk depresi, stres, dan cemas, Kami tau pasti sulit dalam kondisi seperti itu.</p>
                    <p>Jangan patah semangat ya, kalian tidak sendiri dan kami tau kalian orang hebat.</p>
                    <p>Jangan lupa pergi ke psikolog untuk konsultasi masalahmu dear.</p>
                </div>
                <hr style={{width: "100%", margin: "10px 0"}}></hr>
                <div className='result-mentaltest-facility'>
                    Kami menyediakan layanan konsultasi online dengan psikolog untuk membantu meningkatkan kesehatan mentalmu.
                </div>
                <Link to='/konsultasi' className='button-start-consultation'>Yuk Konsultasi!</Link>
            </div> 
        </div>
    )
}

export default MentalTestResult;