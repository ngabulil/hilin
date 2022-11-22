import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button'
import Article from '../utils/data.json'

function ArticlePage() {
  return (
    <div className="article-page">
      <Navigation />
      <div className='article-header'>
        <h1>Artikel Terpopuler</h1>
        <div className='article-header-content'>
            <div className='article-header-content-item-1'>
                <img alt='icon article header'></img>
                <h1>asd</h1>
            </div>
            <div className='article-header-content-item-2'>
                <p>asd</p>
            </div>
        </div>
      </div>
      <div className="article-main-container">
      <h1>Artikel Terbaru</h1>
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
  );
}

export default ArticlePage;
