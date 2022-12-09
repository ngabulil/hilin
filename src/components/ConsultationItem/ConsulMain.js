import React from "react";
import "../../style/consultation.css";
import IconMental from "../../assets/icon mental.png";

export default function ConsulMain() {
  return (
    <div className="consul-main" data-aos="fade-up" data-aos-duration="2000">
      <div className="article-item-left">
        <p>Konsultasi sama mentor tuh ngapain sih?</p>
        <ul>
          <li>Anda dapat berbicara dengan mentor terlatih.</li>
          <li>Bekerja sama untuk mencari solusi dari masalah tersebut.</li>
          <li>
            Cari solusi melalui spreadsheet yang sesuai dengan masalah Anda.
          </li>
          <li>Kenali diri Anda lebih baik melalui berbagai tes psikologi.</li>
        </ul>
      </div>
      <div className="article-item-right">
        <img className="icon-mental" src={IconMental} alt='hehe' />
        <p>Masalah yang sering dibahas antara lain:</p>
        <ul>
          <li>Terlalu banyak berpikir dan terlalu khawatir</li>
          <li>Tidak percaya diri</li>
          <li>Kehilangan motivasi</li>
          <li>Sulit mendapatkan pasangan</li>
          <li>Hubungan Yang Tidak Sehat</li>
          <li>Tidak Mengenali Jati Diri</li>
        </ul>
      </div>
    </div>
  );
}
