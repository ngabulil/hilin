import React from 'react'
import IconMental from '../../assets/icon mental.png'

export default function MentalTestItem() {
  return (
  <div className='mentalTest-item'>
      <div className='mentalTest-item-icon'>
          <img src={IconMental} alt='icon mental'></img>
      </div>
      <div className='mentalTest-item-content'>
          <h3>Mental Test</h3>
          <p>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
      </div>
  </div>
  )
}
