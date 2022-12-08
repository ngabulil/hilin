import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DetailPage = () => {
    const [listPayment, setListPayment] = useState([]);

    useEffect(() => {
        const listPayment = JSON.parse(localStorage.getItem('listPayment'));
        if (listPayment) {
            setListPayment(listPayment);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('listPayment', JSON.stringify(listPayment));
    }, [listPayment]);

    return (
        <><Navigation />
            <div className="detail-pesanan">
                <h1>Pesanan Saya</h1>
                <div className="detail-pesanan-saya">
                    <h2>Riwayat Pesanan</h2>
                    {listPayment.map((item) => {
                        const { id, price, title, firstname, lastname, address, city, region, pcode, contact } = item;
                        return (
                            <div key={id}>
                                <div className="menu-pesanan">
                                    <p>{firstname} {lastname}</p>
                                    <p>{address}, {city} {region} {pcode}</p>
                                    <p>{contact}</p>
                                    <div className="detail-harga">
                                        <p>Paket {title}</p>
                                        <h3>Rp. {price}</h3>
                                    </div>
                                </div>
                                <br />

                            </div>
                        );
                    })}

                </div>

            </div>
            <Footer /></>
    )
}

export default DetailPage