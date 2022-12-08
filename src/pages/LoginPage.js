/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import LoginImg from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';
import {HiOutlineHome} from 'react-icons/hi'
import GoogleButton from 'react-google-button';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, logIn, googleSignIn } = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      sessionStorage.setItem('token',user);
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email/Password yang kamu masukkan salah !'
      })
      // setError(error)
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  });

  return (
    <div>
      <main>
        <div className='login-page'>
          <div className='form-login' data-aos="fade-right" data-aos-duration="1500">
            <Link className='a-homepage' to='/'><div className='to-homepage'><HiOutlineHome /> <p>Kembali Homepage</p></div></Link>
            {error ? <p>{error}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="login-info">
                <h2>Login</h2>
                <label><b>Email</b></label>
                <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email" name="uname" required />
                <label><b>Password</b></label>
                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="psw" required />
                <button className="button-login" type="submit">Login</button>
                <GoogleButton className='login-google' onClick={handleGoogleSignIn}/>
                <p className='info-login'>Belum Punya akun? Silahkan <Link to='/register'>Register</Link></p>
              </div>
            </form>
          </div>
          <div className='hero-login' data-aos="fade-left" data-aos-duration="1500">
            <img src={LoginImg} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

