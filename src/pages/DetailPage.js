import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import { UserAuth } from "../config/AuthContext";

function DetailPesanan() {
  const [payment, setPayment] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const listPayment = async () => {
      const getPayment = await getDocs(collection(db, "payment/user/"+ user.email));
      setPayment(
        getPayment.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    listPayment();
  });
  return (
    <><Navigation />
            <div className="detail-pesanan">
                <h1>Pesanan Saya</h1>
                <div className="detail-pesanan-saya">
                    <h2>Riwayat Pesanan</h2>
                    {payment.map((item) => {
                        const { id, price, title, firstname, lastname, address, city, region, pcode, contact } = item;
                        return (
                            <div key={id}>
                                <div className="menu-pesanan">
                                    <p className='first-n'>{firstname} {lastname}</p>
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
  );
}

export default DetailPesanan;