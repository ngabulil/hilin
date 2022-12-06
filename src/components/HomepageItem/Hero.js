import React from "react";
import Navigation from "../Navigation";
import Button from "../Button";
import ButtonMore from "./ButtonMore";
import Hero from "../../assets/Hero.png";
import { Link } from "react-router-dom";

export default function HeaderHomepage1() {
  return (
    <>
      <Navigation />
      <div className="container-1">
        <div
          className="hero-title"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="header-3">
            <h1>Jaga Kesehatan Mental Anda Sekarang!</h1>
            <div className="header-logo-1">
              <img src={Hero} alt="hero"></img>
            </div>
            <p>
              Platform Mental Check Up gratis dari <b>Health.in</b> menawarkan
              tes kesehatan mental, menyediakan beberapa artikel untuk
              mengurangi rasa stres, dan kegiatan konseling dengan mentor
              profesional.
            </p>
          </div>
          <div className="btn-started-wrap">
            <a href="#our-service">
              <ButtonMore />
            </a>
            <Link to="/mentaltest">
              <Button name="Get Started" />
            </Link>
          </div>
        </div>
        <div
          className="header-logo"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={Hero} alt="hero"></img>
        </div>
      </div>
    </>
  );
}
