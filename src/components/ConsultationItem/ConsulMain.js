import React from 'react'
import '../../style/consultation.css'
import IconMental from '../../assets/icon mental.png'

export default function ConsulMain() {
      return (
        <div className='consul-main'>
          <div className="consul-main-content">
          <div className='article-item'>
          <div className='article-item-left'>
          <ul>
          <p>Konsultasi sama mentor tuh ngapain sih?</p>
          <li>Kamu bisa cerita sama Mentor terlatih.</li>
          <li>Bareng-bareng cari solusi dari masalah yang sedang dihadapi.</li>
          <li>Mencari solusi lewat worksheet yang dibuatkan sesuai dengan masalahmu.</li>
          <li>Lebih mengenal diri sendiri melalui berbagai psikotes.</li>
          </ul>
          </div>
          <div className='article-item-right'>
          <img className='icon-mental' src={IconMental}/>
          <p>Masalah yang sering ditangani termasuk :</p>
          <li>
          <ul>Overthinking & Kecemasan Berlebih</ul>
          <ul>Kurang Percaya Diri</ul>
          <ul>Kehilangan Motivasi</ul>
          <ul>Sulit Mendapatkan Pasangan</ul>
          <ul>Hubungan Yang Tidak Sehat</ul>
          <ul>Tidak Mengenali Jati Diri</ul>
          </li>
          </div>
          </div>
          </div> 
        </div>
      )
  }
  