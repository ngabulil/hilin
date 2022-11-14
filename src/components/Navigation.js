import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link to="/home">Homepage</Link></li>
                    <li><Link to="/article">Article</Link></li>
                    <li><Link to="/mentaltest">Mental Test</Link></li>
                    <li><Link to="/konsultasi">Konsultasi</Link></li>
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
