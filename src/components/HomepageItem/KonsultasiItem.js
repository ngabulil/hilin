import React from 'react'
import IconKonsultasi from '../../assets/icon konsultasi.png'

export default function KonsultasiItem() {
  return (
    <div className='konsultasi-item'>
        <div className='konsultasi-item-icon'>
            <img src={IconKonsultasi} alt='icon konsultasi'></img>
        </div>
        <div className='konsultasi-item-content'>
            <h3>Konsultasi</h3>
            <p>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
        </div>
    </div>
  )
}
