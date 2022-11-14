/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import LoginImg from '../asset/login.png'

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
                        <p>Belum Punya akun? Silahkan <a href="/">Register</a></p>
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
