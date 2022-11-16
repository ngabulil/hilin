/* eslint-disable import/no-named-as-default */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Article from '../utils/data.json';
import Button from '../components/Button';
import ArticleImg from '../assets/header-article.jpg';

function ArticlePage() {
  return (
    <div className="article-page">
      <Navigation />
      <div>
        <main className="article-header">
          <div className="article-hero">
            <h1>Article Terpopuler</h1>
            <img src={ArticleImg} alt="article terbaru" />
            <h1>Pentingnya Menjaga Kesehatan Mental</h1>
          </div>
          <div className="article-description">
            <p>
              Kesehatan mental sama pentingnya dengan kesehatan fisik. Mental yang sehat  akan membuat pikiran menjadi positif sehingga tubuh akan berfungsi dengan baik secara emosional, psikologis,  sosial dan akan mempengaruhi cara berfikir, merasakan, dan berperilaku. Kesehatan mental yang baik juga membantu menentukan cara mengelola stres, berhubungan dengan orang lain, dan membuat sebuah pilihan. Jika kesehatan mental terganggu, pikiran, suasana hati, dan perilaku akan terpengaruh sehingga kondisi fisik dan kualitas hidupmu akan menurun.
              {' '}
              <a href="https://herminahospitals.com/id/articles/pentingnya-menjaga-kesehatan-mental.html" target="blank">Selengkapnya</a>
            </p>
          </div>
        </main>
        <div className="article-header-main">
          <div className="article-hero">
            <h1>Article Terbaru</h1>
          </div>
          <div className="article-main-card-wrap">

            {
                            Article.map((Article) => (
                              <div className="article-main-card" key={Article.id}>
                                <img src={Article.img} alt="viva icon" />
                                <p>{Article.title}</p>
                                <a href={Article.link} target="blank"><Button name="Selengkapnya" /></a>
                              </div>
                            ))
                        }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ArticlePage;
