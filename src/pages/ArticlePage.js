import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import { Bars } from "react-loader-spinner";

function ArticlePage() {
  const [articlenew, setArticlenew] = useState([]);
  const [articlepop, setArticlepop] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    articlePop();
    articleNew();
  }, []);
  return (
    <div className="article-page">
      <Navigation />
      {loading ? (
        <div className="bar-load">
          <Bars
            height="150"
            width="150"
            radius="9"
            color="var(--primary-color)"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <>
          <div className="article-page-container">
            {articlepop.map((data) => (
              <main className="article-header-container" key={data.id}>
                <h1
                  className="article-header-container-h1"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Article Terpopuler
                </h1>
                <div className="article-header">
                  <div
                    className="article-hero"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <img src={data.img} alt="article terbaru" />
                  </div>
                  <div
                    className="article-description"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
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
              <div
                className="article-hero"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>Article Terbaru</h1>
              </div>
              <div className="article-main-card-wrap">
                {articlenew.map((data) => (
                  <div
                    className="article-main-card"
                    key={data.id}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
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
        </>
      )}
    </div>
  );
}

export default ArticlePage;
