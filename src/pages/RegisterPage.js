/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import LoginImg from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../config/AuthContext";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const { googleSignIn, user, signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      alert(error, "Invalid Email");
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
          <div className="hero-login" data-aos="fade-right" data-aos-duration="1500">
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
                <button className="button-google" onClick={handleGoogleSignIn}>
                  {<FcGoogle />} Masuk dengan Google
                </button>

                <p className="info-register">
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
