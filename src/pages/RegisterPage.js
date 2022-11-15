/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import LoginImg from '../assets/login.png'

export default class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main>
            <div className='login-page'>
            <div className='hero-login'>
                    <img src={LoginImg}/>
                </div>
                <div>
                    <form>
                      <div className="register-info">
                      <h2>Register</h2>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="uname" required/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Password" name="psw" required/>
                        <label><b>Confirm Password</b></label>
                        <input type="password" placeholder="Confirm Password" name="psw" required/>
                        <button className="button-login"type="submit">Register</button>
                        <p className='info-login'>Sudah Punya akun? Silahkan <a href="/">Login</a></p>
                      </div>
                    </form>
                </div>
            </div>
        </main>
      </div>
    )
  }
}
