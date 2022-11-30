import React from 'react';
import MentalDetailIcon from '../../assets/mental test.png';
import Button from '../Button';

export default function MentalTestDetail() {
  return (
    <div className='mentaltest-detail'>
      <div className='mentaltest-detail-content'>
        <h1>Mental Test</h1>
        <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        <Button name='Mulai Tes' />
      </div>
      <div className='mentaltest-detail-img'>
        <img src={MentalDetailIcon} alt='Article Icon'></img>
      </div>
    </div>
  )
}