import React, { useState } from 'react';
import '../style/style.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Navigation() {
  const [toggle, setToggle] = useState(false)

  const handleToggle=() => {
    setToggle(!toggle)
  }
  return (   
        <nav className={toggle?'navbar expanded':'navbar'}>
        <button className='hamburger'  onClick={handleToggle}>☰</button>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/article">Article</Link></li>
              <li><Link to="/mentaltest">Mental Test</Link></li>
              <li><Link to="/konsultasi">Konsultasi</Link></li>
            </ul>
          </div>
          <div className="login">
            <Link to="/login"><button className="btn-login">Login</button></Link>
          </div>
        </nav>
  )
}
