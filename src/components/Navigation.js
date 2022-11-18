import React, { Component } from 'react';
import '../style/style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/article'>Article</Link></li>
                    <li><Link to='/mentaltest'>Mental Test</Link></li>
                    <li><Link to='/konsultasi'>Konsultasi</Link></li>
                </ul>
            </div>
            <div className='login'>
              <Link to='/login'><button className='btn-login'>Login</button></Link>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
