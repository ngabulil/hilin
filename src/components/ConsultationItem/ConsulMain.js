import React from "react";
import "../../style/consultation.css";
import IconMental from "../../assets/icon mental.png";

export default function ConsulMain() {
  return (
    <div className="consul-main">
      <div className="article-item-left">
        <p>Konsultasi sama mentor tuh ngapain sih?</p>
        <ul>
          <li>Kamu bisa cerita sama Mentor terlatih.</li>
          <li>Bareng-bareng cari solusi dari masalah yang sedang dihadapi.</li>
          <li>
            Mencari solusi lewat worksheet yang dibuatkan sesuai dengan
            masalahmu.
          </li>
          <li>Lebih mengenal diri sendiri melalui berbagai psikotes.</li>
        </ul>
      </div>
      <div className="article-item-right">
        <img className="icon-mental" src={IconMental} alt='hehe'/>
        <p>Masalah yang sering ditangani termasuk :</p>
        <ul>
          <li>Overthinking & Kecemasan Berlebih</li>
          <li>Kurang Percaya Diri</li>
          <li>Kehilangan Motivasi</li>
          <li>Sulit Mendapatkan Pasangan</li>
          <li>Hubungan Yang Tidak Sehat</li>
          <li>Tidak Mengenali Jati Diri</li>
        </ul>
      </div>
    </div>
  );
}
