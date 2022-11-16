import React from 'react'
import Navigation from '../Navigation'
import Button from '../Button'
import ButtonMore from './ButtonMore'
import Hero from '../../assets/Hero.png'

export default function HeaderHomepage1() {
  return (
    <>
    <Navigation />
    <div className='container-1'>
      <div className='hero-title'>
        <div className='header-3'>
          <h1>Jaga Kesehan Mentalmu Dari Sekarang!</h1>
          <p>Health.in platform Free Mental Check Up menyediakan Layanan tes kesehatan mental, Menyedian Article untuk mengurasi rasa stress, dan menyediakan fitur konsultasi bersama Mentor Profesional.</p>
        </div>
        <div className='btn-started-wrap'>
          <ButtonMore />
          <Button name='Get Started' />
        </div>
      </div>
      <div className='header-logo'>
        <img src={Hero} alt='hero'></img>
      </div>
    </div>
    </>
  )
}
