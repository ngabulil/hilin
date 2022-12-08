import React from 'react';
import { Link } from 'react-router-dom';
import ImageTest from '../../assets/image 17.png';
import '../../style/MentalTestPage.css';

export default function MentalTestHome() {
  return (
    <div className='mentaltest-main-container'>
        <div className='mentaltest-start-container'>
            <img src={ImageTest} alt='Mental Test'  data-aos="fade-down" data-aos-duration="1500" ></img>
            <div className='mentaltest-description-container' data-aos="fade-up" data-aos-duration="1500">
                <h2>Mental Test</h2>
                <p>Bagaimana kabarmu akhir-akhir ini? Cek kondisi kesehatan mentalmu yuk!</p>
                <Link to='/mentaltest/start' className='button-start-test'>Mulai</Link>
            </div>
        </div>
    </div>
  )
}