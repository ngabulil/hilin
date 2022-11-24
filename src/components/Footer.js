import React, { Component } from 'react';
import LogoFooter from '../assets/logo-footer.png';
import LogoYT from '../assets/youtube.png';
import LogoFB from '../assets/facebook.png';
import LogoWA from '../assets/whatsapp.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='footer-main'>
            <div className='footer-content'>
              <img src={LogoFooter} alt='Logo'></img>
              <p>Jl. Lebak Bulus I Kav. 29 Cilandak</p>
              <p>Jakarta Selatan, DKI Jakarta, Indonesia 12340</p>
              <div className='sosmed'>
                <img src={LogoYT} alt='logo yt'></img>
                <img src={LogoFB} alt='logo fb'></img>
                <img src={LogoWA} alt='logo wa'></img>
              </div>
            </div>
            <div className='footer-content'>
              <h2>Company Info</h2>
              <p>Tentang Kami</p>
              <p>Karir</p>
              <p>Blog</p>
              <p>Info Layanan</p>
            </div>
            <div className='footer-content'>
              <h2>Cabang</h2>
              <p>Tangerang</p>
              <p>Jakarta</p>
              <p>Surabaya</p>
              <p>Bekasi</p>
            </div>
            <div className='footer-content'>
              <h2>Kontak Kami</h2>
              <p>+626564465455</p>
              <p>info@healthin.com</p>
              <p>Telp: +5646544654</p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>Copyright © Health.in 2022</p>
          </div>
        </div>
      </div>
    )
  }
}
