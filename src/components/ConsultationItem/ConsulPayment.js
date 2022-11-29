import React from 'react';
import Popup from 'reactjs-popup';
import {Payment1, Payment2, Payment3} from './ConsulPaymentModal';
import '../../style/consultation.css'

export default function ConsulPayment() {

      return (
        <div className='consul-payment'>
          <div className='consul-payment-content'>
          <div className='consul-payment-title'>
            <h1>Paket Konsultasi Dengan Mentor</h1>
            </div>
          <div className="pricing-table">
        <div className="pricing-card">
        <div className="row-price">
          <div className='column-price'>
            <h3 className="pricing-card-header">
              Paket Premium<span className='blue-text'>200k</span> 
            </h3>
          </div>  
        </div>
          <a className="pricing-card-duration">
            <span className='session'>1 Sesi</span><span className='duration-lenght'>90 menit<br/>Konsultasi</span>
            </a>
            <ul className="pricing-card-list">
              <li>Catatan Konsultasi</li>
              <li>Hasil Psikotest</li>  
              <li>Tes Kesehatan Mental</li>
              <li>Tes Kepribadian</li>
              <li>Test Minat Karir</li>         
            </ul>
            <Popup modal trigger={<button className="order-btn">Pilih Paket</button>}>
            {close => <Payment1 close={close} />}
            </Popup>         
        </div>
        <div className="pricing-card">
        <div className="row-price">
          <div className='column-price'>
            <h3 className="pricing-card-header">
              Paket Premium<span className='blue-text'>200k</span> 
            </h3>
          </div>  
        </div>
          <a className="pricing-card-duration">
            <span className='session'>1 Sesi</span><span className='duration-lenght'>90 menit<br/>Konsultasi</span>
            </a>
            <ul className="pricing-card-list">
              <li>Catatan Konsultasi</li>
              <li>Hasil Psikotest</li>  
              <li>Tes Kesehatan Mental</li>
              <li>Tes Kepribadian</li>
              <li>Test Minat Karir</li>         
            </ul>
            <Popup modal trigger={<button className="order-btn">Pilih Paket</button>}>
            {close => <Payment2 close={close} />}
            </Popup>
                         
        </div>
        <div className="pricing-card">
        <div className="row-price">
          <div className='column-price'>
            <h3 className="pricing-card-header">
              Paket Premium<span className='blue-text'>200k</span> 
            </h3>
          </div>  
        </div>
          <a className="pricing-card-duration">
            <span className='session'>1 Sesi</span><span className='duration-lenght'>90 menit<br/>Konsultasi</span>
            </a>
            <ul className="pricing-card-list">
              <li>Catatan Konsultasi</li>
              <li>Hasil Psikotest</li>  
              <li>Tes Kesehatan Mental</li>
              <li>Tes Kepribadian</li>
              <li>Test Minat Karir</li>         
            </ul>
            <Popup modal trigger={<button className="order-btn">Pilih Paket</button>}>
            {close => <Payment3 close={close} />}
            </Popup>                         
        </div>
    </div>
          </div>
        </div>
      )
  }