import React, { Component } from "react";
import bgImage from "../../assets/konsultasi mentor.png";
import "../../style/consultation.css";

export default class ConsulHeader extends Component {
  render() {
    return (
      <div className="consul-header">
        <div className="consul-description" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="header-title">Konsultasi dengan Mentor</h1>
          <div className="header-image-mob" >
            <img src={bgImage} alt="bgImage"></img>
          </div>
          <p>
            Punya Masalah Kecemasan? Overthinking? Sulit Mengelola Emosi & Belum
            Mengenal Jati Diri? Konsultasiin aja bersama Satu Persen!
          </p>
          <button className="btn-konsultasi" type="submit">
            Daftar
          </button>
        </div>
        <div className="header-image" data-aos="fade-left" data-aos-duration="1500">
          <img src={bgImage} alt="bgImage"></img>
        </div>
      </div>
    );
  }
}
