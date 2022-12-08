import React, { Component } from 'react';
import LogoFooter from '../assets/logo-footer.png';
import LogoYT from '../assets/youtube.png';
import LogoFB from '../assets/facebook.png';
import LogoWA from '../assets/whatsapp.png';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='footer-main'>
            <div className='footer-content'>
              <Link to='/'><img src={LogoFooter} alt='Logo'></img></Link>
              <p>Jl. Nusa Indah 4 No. 19 Kutabumi</p>
              <p>Tangerang, Banten, Indonesia 15561</p>
              <div className='sosmed'>
                <a href='https://www.youtube.com/@user-ch4yd4yu6e' target='blank'><img src={LogoYT} alt='logo yt'></img></a>
                <a href='https://www.facebook.com/melon001' target='blank'><img src={LogoFB} alt='logo fb'></img></a>
                <a href='https://wa.me/6285718741537' target='blank'><img src={LogoWA} alt='logo wa'></img></a>
              </div>
            </div>
            <div className='footer-content'>
              <h2>Company Info</h2>
              <a href='#cont-1'><p>Tentang Kami</p></a>
              <Link to='/mentaltest'><p>Mental Test</p></Link>
              <Link to='/article'><p>Article</p></Link>
              <Link to='/konsultasi'><p>Konsultasi</p></Link>
            </div>
            <div className='footer-content'>
              <h2>Teknologi</h2>
              <p>React</p>
              <p>Express JS</p>
              <p>Firebase</p>
              <p>AOS</p>
            </div>
            <div className='footer-content'>
              <h2>Kontak Kami</h2>
              <p className='hub-footer'>No. Telp :</p>
              <p>+6285718741537</p>
              <p className='hub-footer'>Email :</p>
              <p>info.mental.health.in@gmail.com</p>
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
