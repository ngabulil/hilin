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
            Apakah Anda memiliki masalah kecemasan? Berpikir terlalu banyak? Sulit mengatur emosi dan tidak terlalu mengenal satu sama lain? Konsultasikan dengan kami!
          </p>
          <a href="#consulpayment">
          <button className="btn-konsultasi">
            Pilih Paket Sekarang!
          </button>
          </a>
        </div>
        <div className="header-image" data-aos="fade-left" data-aos-duration="1500">
          <img src={bgImage} alt="bgImage"></img>
        </div>
      </div>
    );
  }
}
