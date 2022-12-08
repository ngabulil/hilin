/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
//import DateTimePicker from 'react-datetime-picker';
import '../../style/consultation.css';
import Swal from 'sweetalert2';

export function Payment1({ close }) {

  const title = "Nyaman";
  const [contact, setContact] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddres] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [pcode, setPcode] = useState();
  const price = "150000";
  const [error, setError] = useState('')
  //const [datetime, setDatetime] = useState(new Date());


  function handleSubmit(event) {
    event.preventDefault();
    setError('')
    if (sessionStorage.key('token') != null) {
      let listPayment = localStorage.getItem('listPayment') ? localStorage.getItem('listPayment') : JSON.stringify([]);
      let dataObject = {
        "title": title,
        "contact": contact,
        "firstname": firstname,
        "lastname": lastname,
        "address": address,
        "city": city,
        "province": province,
        "pcode": pcode,
        "price": price,
        //"datetime" : datetime,
      }
      listPayment = JSON.parse(listPayment);
      listPayment.push(dataObject);
      localStorage.setItem('listPayment', JSON.stringify(listPayment));
      Swal.fire({
        icon: 'success',
        title: 'Selamat!',
        text: 'Pesanan Anda Telah Diproses!',
      })
    }
    else if (sessionStorage.key('token') == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Anda Belum Login',
      })
    }
  };

  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="header"> Paket Nyaman </div>
      <div className="content">
        {error ? <p>{error}</p> : null}
        <form className="modal-form" onSubmit={handleSubmit} >
          <fieldset>
            <legend>Contact</legend>
            <div>
              <label htmlFor="contact-phone-number" />
              <input
                id="contact-phone-number"
                type="text"
                name="phone"
                placeholder="No. Handphone"
                pattern="[0-9]{12}"
                onChange={(event) => setContact(event.target.value)}
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Billing Address</legend>
            <div>
              <label htmlFor="billing-address-first-name" />
              <input
                id="billing-address-first-name"
                //style={inputField}
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                onChange={(event) => setFirstname(event.target.value)}
                required
              />
              <label htmlFor="billing-address-last-name" />
              <input
                id="billing-address-last-name"
                //style={inputField}
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                onChange={(event) => setLastname(event.target.value)}
                required
              />
              <div>
                <label htmlFor="billing-address-street-address" />
                <input
                  id="billing-address-street-address"
                  //style={halfInputField}
                  type="text"
                  name="street_address"
                  placeholder="Alamat Lengkap"
                  onChange={(event) => setAddres(event.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-address-city-locality" />
                <input
                  id="billing-address-city-locality"
                  //style={cityInputField}
                  type="text"
                  name="locality"
                  placeholder="Kota"
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-state-province" />
                <input
                  id="billing-address-state-province"
                  //style={stateInputField}
                  type="text"
                  name="province"
                  placeholder="Provinsi"
                  onChange={(event) => setProvince(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-postal-code" />
                <input
                  id="billing-address-postal-code"
                  //style={postalInputField}
                  type="text"
                  name="postal_code"
                  placeholder="Kode Pos"
                  pattern="[0-9]{5}"
                  onChange={(event) => setPcode(event.target.value)}
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="price-info">
            Rp.150.000
          </div>
          <button className="order-btn-payment" type="submit">Bayar</button>
        </form>
      </div>
    </div>
  )
}

export function Payment2({ close }) {

  const title = "Sayang";
  const [contact, setContact] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddres] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [pcode, setPcode] = useState();
  const price = "200000";
  const [error, setError] = useState('')
  //const [datetime, setDatetime] = useState(new Date());

  function handleSubmit(event) {
    event.preventDefault();
    setError('')
    if (sessionStorage.getItem('token') && ('token') != '') {
      var listPayment = localStorage.getItem('listPayment') ? localStorage.getItem('listPayment') : JSON.stringify([]);
      var dataObject = {
        "title": title,
        "contact": contact,
        "firstname": firstname,
        "lastname": lastname,
        "address": address,
        "city": city,
        "province": province,
        "pcode": pcode,
        "price": price,
        //"datetime" : datetime,
      }
      listPayment = JSON.parse(listPayment);
      listPayment.push(dataObject);
      localStorage.setItem('listPayment', JSON.stringify(listPayment));
      Swal.fire({
        icon: 'success',
        title: 'Selamat!',
        text: 'Pesanan Anda Telah Diproses!',
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Anda Belum Login',
      })
    }
  };

  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="header"> Paket Sayang </div>
      <div className="content">
        {error ? <p>{error}</p> : null}
        <form className="modal-form" onSubmit={handleSubmit} >
          <fieldset>
            <legend>Contact</legend>
            <div>
              <label htmlFor="contact-phone-number" />
              <input
                id="contact-phone-number"
                type="text"
                name="phone"
                placeholder="No. Handphone"
                pattern="[0-9]{12}"
                onChange={(event) => setContact(event.target.value)}
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Billing Address</legend>
            <div>
              <label htmlFor="billing-address-first-name" />
              <input
                id="billing-address-first-name"
                //style={inputField}
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                onChange={(event) => setFirstname(event.target.value)}
                required
              />
              <label htmlFor="billing-address-last-name" />
              <input
                id="billing-address-last-name"
                //style={inputField}
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                onChange={(event) => setLastname(event.target.value)}
                required
              />
              <div>
                <label htmlFor="billing-address-street-address" />
                <input
                  id="billing-address-street-address"
                  //style={halfInputField}
                  type="text"
                  name="street_address"
                  placeholder="Alamat Lengkap"
                  onChange={(event) => setAddres(event.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-address-city-locality" />
                <input
                  id="billing-address-city-locality"
                  //style={cityInputField}
                  type="text"
                  name="locality"
                  placeholder="Kota"
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-state-province" />
                <input
                  id="billing-address-state-province"
                  //style={stateInputField}
                  type="text"
                  name="province"
                  placeholder="Provinsi"
                  onChange={(event) => setProvince(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-postal-code" />
                <input
                  id="billing-address-postal-code"
                  //style={postalInputField}
                  type="text"
                  name="postal_code"
                  placeholder="Kode Pos"
                  pattern="[0-9]{5}"
                  onChange={(event) => setPcode(event.target.value)}
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="price-info">
            Rp.200.000
          </div>
          <button className="order-btn-payment" type="submit">Bayar</button>
        </form>
      </div>
    </div>
  )
}

export function Payment3({ close }) {

  const title = "Bahagia";
  const [contact, setContact] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddres] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [pcode, setPcode] = useState();
  const price = "250000";
  const [error, setError] = useState('')
  //const [datetime, setDatetime] = useState(new Date());

  function handleSubmit(event) {
    event.preventDefault();
    setError('')
    if (sessionStorage.getItem('token') && ('token') != '') {
      var listPayment = localStorage.getItem('listPayment') ? localStorage.getItem('listPayment') : JSON.stringify([]);
      var dataObject = {
        "title": title,
        "contact": contact,
        "firstname": firstname,
        "lastname": lastname,
        "address": address,
        "city": city,
        "province": province,
        "pcode": pcode,
        "price": price,
        //"datetime" : datetime,
      }
      listPayment = JSON.parse(listPayment);
      listPayment.push(dataObject);
      localStorage.setItem('listPayment', JSON.stringify(listPayment));
      Swal.fire({
        icon: 'success',
        title: 'Selamat!',
        text: 'Pesanan Anda Telah Diproses!',
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Anda Belum Login',
      })
    }
  };

  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="header"> Paket Bahagia </div>
      <div className="content">
        {error ? <p>{error}</p> : null}
        <form className="modal-form" onSubmit={handleSubmit} >
          <fieldset>
            <legend>Contact</legend>
            <div>
              <label htmlFor="contact-phone-number" />
              <input
                id="contact-phone-number"
                type="text"
                name="phone"
                placeholder="No. Handphone"
                pattern="[0-9]{12}"
                onChange={(event) => setContact(event.target.value)}
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Billing Address</legend>
            <div>
              <label htmlFor="billing-address-first-name" />
              <input
                id="billing-address-first-name"
                //style={inputField}
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                onChange={(event) => setFirstname(event.target.value)}
                required
              />
              <label htmlFor="billing-address-last-name" />
              <input
                id="billing-address-last-name"
                //style={inputField}
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                onChange={(event) => setLastname(event.target.value)}
                required
              />
              <div>
                <label htmlFor="billing-address-street-address" />
                <input
                  id="billing-address-street-address"
                  //style={halfInputField}
                  type="text"
                  name="street_address"
                  placeholder="Alamat Lengkap"
                  onChange={(event) => setAddres(event.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-address-city-locality" />
                <input
                  id="billing-address-city-locality"
                  //style={cityInputField}
                  type="text"
                  name="locality"
                  placeholder="Kota"
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-state-province" />
                <input
                  id="billing-address-state-province"
                  //style={stateInputField}
                  type="text"
                  name="province"
                  placeholder="Provinsi"
                  onChange={(event) => setProvince(event.target.value)}
                  required
                />
                <label htmlFor="billing-address-postal-code" />
                <input
                  id="billing-address-postal-code"
                  //style={postalInputField}
                  type="text"
                  name="postal_code"
                  placeholder="Kode Pos"
                  pattern="[0-9]{5}"
                  onChange={(event) => setPcode(event.target.value)}
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="price-info">
            Rp.250.000
          </div>
          <button className="order-btn-payment" type="submit">Bayar</button>
        </form>
      </div>
    </div>
  )
}