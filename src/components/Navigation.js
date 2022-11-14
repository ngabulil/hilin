import React, { Component } from 'react';
import '../style/style.css'
import Logo from '../asset/Logo.png'

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Article</li>
                    <li>Mental Test</li>
                    <li>Konsultasi</li>
                </ul>
            </div>
            <div className='login'>
                <button className='btn-login'>Login</button>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
