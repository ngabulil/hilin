/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import LoginImg from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../config/AuthContext";
import GoogleButton from "react-google-button";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { googleSignIn, user, signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      sessionStorage.setItem('token',user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
      sessionStorage.setItem('token',signUp);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email sudah terdaftar/Email yang dimasukkan salah !'
      })
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  });

  return (
    <div>
      <div>
        <div className="login-page">
          <div
            className="hero-login"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src={LoginImg} />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <form onSubmit={handleSubmit} className="register">
              <div className="register-info">
                <h2>Register</h2>
                <label>
                  <b>Email</b>
                </label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="Email"
                  name="uname"
                  required
                />
                <label>
                  <b>Password</b>
                </label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Password"
                  name="psw"
                  required
                />

                <button className="button-login" type="submit">
                  Register
                </button>
                <GoogleButton className='login-google' onClick={handleGoogleSignIn}/>

                <p className="info-login">
                  Sudah Punya akun? Silahkan <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
