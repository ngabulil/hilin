import React from 'react';
import ServiceItem from './ServiceItem';
import IconArticle from '../../assets/icon article.png';
import IconMental from '../../assets/icon mental.png';
import IconKonsultasi from '../../assets/icon konsultasi.png';
import Button from '../Button';
import ArticleImg from '../../assets/article.png';
import MentalDetailIcon from '../../assets/mental test.png';
import Konsultasi from '../../assets/konsultasi.png';

export default function HeaderHomepage2() {
  return (
    <div className="container-2" data-aos="fade-up" data-aos-duration="2000">
      <h1>Our Service</h1>
      <div className="container-2-content">
        <ServiceItem
          icon={IconArticle}
          title="Article"
          description="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis"
        />
        <ServiceItem
          icon={IconMental}
          title="Mental"
          description="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis"
        />
        <ServiceItem
          icon={IconKonsultasi}
          title="Konsultasi"
          description="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis"
        />
      </div>
      <div className="container-3">
        <div className="article-detail" data-aos="fade-right" data-aos-duration="1500">
          <div className="article-detail-img">
            <img src={ArticleImg} alt="Article Icon" />
          </div>
          <div className="article-detail-content">
            <h1>Article</h1>
            <div className="article-detail-img-1">
            <img src={ArticleImg} alt="Article Icon" />
          </div>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            <Button name="Mulai" />
          </div>
        </div>
        <div className="article-detail-mob">
          <div className="article-detail-img">
            <img src={MentalDetailIcon} alt="Article Icon" />
          </div>
          <div className="article-detail-content">
            <h1>Article</h1>
            <div className="article-detail-img-1">
            <img src={MentalDetailIcon} alt="Article Icon" />
          </div>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            <Button name="Mulai" />
          </div>
        </div>
        <div className="mentaltest-detail" data-aos="fade-left" data-aos-duration="1500">
          <div className="mentaltest-detail-content">
            <h1>Mental Test</h1>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            <Button name="Mulai Tes" />
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
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            <Button name="Daftar Sekarang" />
          </div>
        </div>
      </div>
    </div>
  );
}
