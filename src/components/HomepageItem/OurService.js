import React from 'react';
import ServiceItem from './ServiceItem';
import IconArticle from '../../assets/icon article.png';
import IconMental from '../../assets/icon mental.png';
import IconKonsultasi from '../../assets/icon konsultasi.png';
import Button from '../Button';
import ArticleImg from '../../assets/article.png';
import MentalDetailIcon from '../../assets/mental test.png';
import Konsultasi from '../../assets/konsultasi.png';
import { Link } from 'react-router-dom';

export default function HeaderHomepage2() {
  return (
    <div className="container-2" data-aos="fade-up" data-aos-duration="2000">
      <h1 id='h1-service'>Our Service</h1>
      <div className="container-2-content">
        <ServiceItem
          icon={IconArticle}
          title="Article"
          description="berisi beberapa artikel tentang kegiatan yang ditujukan untuk mengurangi stres"
        />
        <ServiceItem
          icon={IconMental}
          title="Mental Test"
          description="Tes kesehatan mental untuk mengukur seberapa banyak stres yang anda alami saat ini"
        />
        <ServiceItem
          icon={IconKonsultasi}
          title="Konsultasi"
          description="Konsultasi dengan mentor profesional untuk refleksi diri dan mengurangi stres yang anda hadapi"
        />
      </div>
      <div className="container-3" id='our-service'>
        <div className="article-detail" data-aos="fade-right" data-aos-duration="1500">
          <div className="article-detail-img">
            <img src={ArticleImg} alt="Article Icon" />
          </div>
          <div className="article-detail-content">
            <h1>Article</h1>
            <div className="article-detail-img-1">
              <img src={ArticleImg} alt="Article Icon" />
            </div>
            <p>Artikel ini berisi artikel terbaru dan terpopuler yang menawarkan macam-macam solusi yang berbeda untuk mengurangi rasa stres dan berbagai cara untuk melakukan aktivitas untuk menghilangkan stres.</p>
            <Link to='/article'><Button name="Mulai" /></Link>
          </div>
        </div>
        <div className="article-detail-mob" data-aos="fade-left" data-aos-duration="1500">
          <div className="article-detail-img">
            <img src={MentalDetailIcon} alt="Article Icon" />
          </div>
          <div className="article-detail-content">
            <h1>Mental Test</h1>
            <div className="article-detail-img-1">
              <img src={MentalDetailIcon} alt="Article Icon" />
            </div>
            <p>Tes Kesehatan Mental yang memungkinkan Anda mengukur seberapa besar stres yang Anda alami saat ini dengan menjawab survei yang telah kami sediakan.</p>
            <Link to='/mentaltest'><Button name="Mulai Tes" /></Link>
          </div>
        </div>
        <div className="mentaltest-detail" data-aos="fade-left" data-aos-duration="1500">
          <div className="mentaltest-detail-content">
            <h1>Mental Test</h1>
            <p>Tes Kesehatan Mental yang memungkinkan Anda mengukur seberapa besar stres yang Anda alami saat ini dengan menjawab survei yang telah kami sediakan.</p>
            <Link to='/mentaltest'><Button name="Mulai Tes" /></Link>
          </div>
          <div className="mentaltest-detail-img">
            <img src={MentalDetailIcon} alt="Article Icon" />
          </div>
        </div>
        <div className="article-detail" data-aos="fade-right" data-aos-duration="1500">
          <div className="article-detail-img">
            <img src={Konsultasi} alt="Article Icon" />
          </div>
          <div className="article-detail-content">
            <h1>Konsultasi</h1>
            <div className="article-detail-img-1">
              <img src={Konsultasi} alt="Article Icon" />
            </div>
            <p>Solusi terbaik untuk mengembalikan senyum bahagia Anda
              Butuh tempat yang aman dan nyaman untuk bercerita? Psikolog profesional siap membantu Anda dengan berbagai masalah Anda. Cepat, akurat dan ramah.</p>
            <Link to='/konsultasi'><Button name="Daftar Sekarang" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
