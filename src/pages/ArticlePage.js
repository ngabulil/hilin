import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";

function ArticlePage() {
  const [articlenew, setArticlenew] = useState([]);
  const [articlepop, setArticlepop] = useState([]);

  useEffect(() => {
    const articlePop = async () => {
      const getArticlepop = await getDocs(collection(db, "articlepop"));
      setArticlepop(
        getArticlepop.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const articleNew = async () => {
      const getArticlenew = await getDocs(collection(db, "articlenew"));
      setArticlenew(
        getArticlenew.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    articlePop();
    articleNew();
  }, []);
  return (
    <div className="article-page">
      <Navigation />
      <div className="article-page-container">
        {articlepop.map((data) => (
          <main className="article-header-container" key={data.id}>
            <h1 className="article-header-container-h1">Article Terpopuler</h1>
            <div className="article-header">
              <div className="article-hero">
                <img src={data.img} alt="article terbaru" />
              </div>
              <div className="article-description">
                <h1>{data.title}</h1>
                <p>
                  {data.desc}
                  <a href={data.link} target="blank">
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </main>
        ))}
        <div className="article-header-main">
          <div className="article-hero">
            <h1>Article Terbaru</h1>
          </div>
          <div className="article-main-card-wrap">
            {articlenew.map((data) => (
              <div className="article-main-card" key={data.id}>
                <img src={data.img} alt="viva icon" />
                <p>{data.title}</p>
                <a href={data.link} target="blank">
                  <Button name="Selengkapnya" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
