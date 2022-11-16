/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import LoginImg from '../assets/login.png'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main>
            <div className='login-page'>
                <div>
                    <form>
                      <div className="login-info">
                      <h2>Login</h2>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="uname" required/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Password" name="psw" required/>
                        <button className="button-login"type="submit">Login</button>
                        <p className='info-login'>Belum Punya akun? Silahkan <Link to='/register'>Register</Link></p>

                      </div>
                    </form>
                </div>
                <div className='hero-login'>
                    <img src={LoginImg}/>
                </div>
            </div>
        </main>
      </div>
    )
  }
}
