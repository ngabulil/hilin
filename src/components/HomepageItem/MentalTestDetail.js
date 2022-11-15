import React from 'react'
import MentalDetailIcon from '../../assets/mental test.png'
import MentalTestButton from './MentalTestButton'


export default function MentalTestDetail() {
  return (
    <div> 
        <div>
            <h1>Mental Test</h1>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        </div>     
        <div>
            <img src={MentalDetailIcon} alt='Article Icon'></img>
        </div>
        <div>
            <MentalTestButton/>
        </div>
    </div>
  )
}