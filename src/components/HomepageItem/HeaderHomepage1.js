import React from 'react'
import GetStartBtn from './GetStartBtn'
import SelengkapnyaBtn from './SelengkapnyaBtn'
import Hero from '../../assets/Hero.png'

export default function HeaderHomepage1() {
  return (
    <div className='container-1'>
        <div className='header-1'>
        <div className='header-2'>
          <div className='header-3'>
            <h1>Untuk Indonesia Yang Lebih Sehat</h1>
            <p>Kami menyediakan Free Mental Check Up sejak 2013, membangun layanan YukSharing.id sejak 2018 serta Road to Mental Health Fest juga edukasi ke sekolah-sekolah dari SMP, SMA hingga kampus juga korporasi</p>
          </div>
          <div className='btn-started-wrap'>
            <SelengkapnyaBtn />
            <GetStartBtn />
          </div>
        </div>
        <div className='header-logo'>
          <img src={Hero} alt='hero'></img>
        </div>
        </div>
      </div>
  )
}
