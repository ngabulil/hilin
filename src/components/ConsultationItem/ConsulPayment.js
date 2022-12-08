import React from "react";
import Popup from "reactjs-popup";
import { Payment1, Payment2, Payment3 } from "./ConsulPaymentModal";
import "../../style/consultation.css";

export default function ConsulPayment() {
  return (
    <div id="consulpayment" className="consul-payment" data-aos="fade-up" data-aos-duration="2000">
      <div className="consul-payment-content">
        <div className="consul-payment-title">
          <h1>Paket Konsultasi Dengan Mentor</h1>
        </div>
        <div className="pricing-table">
          <div className="pricing-card" data-aos="fade-up" data-aos-duration="1500">
            <div className="row-price">
              <p className="p-premium">Paket Nyaman</p>
              <p>150K</p>
            </div>
            <div className="price-time">
              <p className="p-price">1 Sesi</p>
              <div className="price-time-item">
                <p>60 Menit</p>
                <p>Konsultasi</p>
              </div>
            </div>
            <ul className="pricing-card-list">
              <li>Catatan Penasehat</li>
              <li>Hasil tes psikologi</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
            <Popup
              modal
              trigger={<button className="order-btn">Pilih Paket</button>}
            >
              {(close) => <Payment1 close={close} />}
            </Popup>
          </div>
          <div className="pricing-card" data-aos="fade-up" data-aos-duration="1500">
            <div className="row-price">
              <p className="p-premium">Paket Sayang</p>
              <p>200K</p>
            </div>
            <div className="price-time">
              <p className="p-price">2 Sesi</p>
              <div className="price-time-item">
                <p>60 Menit</p>
                <p>Konsultasi</p>
              </div>
            </div>
            <ul className="pricing-card-list">
              <li>Catatan Penasehat</li>
              <li>Hasil tes psikologi</li>
              <li>Lebih dekat dengan Konseling</li>
              <li>Tes Kepribadian</li>
              <li>-</li>
            </ul>
            <Popup
              modal
              trigger={<button className="order-btn">Pilih Paket</button>}
            >
              {(close) => <Payment2 close={close} />}
            </Popup>
          </div>
          <div className="pricing-card" data-aos="fade-up" data-aos-duration="1500">
            <div className="row-price">
              <p className="p-premium">Paket Bahagia</p>
              <p>250K</p>
            </div>
            <div className="price-time">
              <p className="p-price">3 Sesi</p>
              <div className="price-time-item">
                <p>60 Menit</p>
                <p>Konsultasi</p>
              </div>
            </div>
            <ul className="pricing-card-list">
              <li>Catatan Penasehat</li>
              <li>Hasil tes psikologi</li>
              <li>Lebih dekat dengan Konseling</li>
              <li>Tes Kepribadian</li>
              <li>Tes tekanan psikologis</li>
            </ul>
            <Popup
              modal
              trigger={<button className="order-btn">Pilih Paket</button>}
            >
              {(close) => <Payment3 close={close} />}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
