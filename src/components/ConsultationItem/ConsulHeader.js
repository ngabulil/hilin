import React, { Component } from 'react'
import bgImage from '../../assets/konsultasi mentor.png'
import '../../style/consultation.css'

export default class ConsulHeader extends Component {
  render() {
    return (
        <div className='consul-header'>
          <div className='consul-header-container'>
          <div className='consul-header-content'>
          <div className='consul-header-content-item'>
          <div className='header-image'>
              <img src={bgImage} alt='bgImage'></img>
            </div>
            <h1 className='header-title'>Konsultasi dengan Mentor</h1>
              <div className='desc'>
                <p>Punya Masalah Kecemasan? Overthinking? Sulit Mengelola Emosi & Belum Mengenal Jati Diri? Konsultasiin aja bersama Satu Persen!</p>
              </div>
                <button className='btn-konsultasi'type="submit">
                  Daftar
                </button>
            </div>
            </div>
            </div>
        </div>
    )
  }
}
