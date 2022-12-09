import React from 'react';
import TeamProject from './TeamProject';
import Button from '../Button';
import { Link } from 'react-router-dom';
import ulil from '../../assets/ulil.png'
import rahmat from '../../assets/rahmat.jpeg'
import audy from '../../assets/audy.jpeg'
import alfian from '../../assets/alfian.jpeg'

export default function HeaderHomepage4() {
  return (
    <div className='container-4'>
      <div className='content-pelayanan' data-aos="fade-up" data-aos-duration="1500">
        <div className='content-pelayanan-isi'>
          <h1>Live Chat</h1>
          <p>Berikan dukunganmu lewat komentar untuk saling memberikan support
          kepada orang lain yang sedang mengakses website ini. Diharapkan dengan
          adanya fitur ini dapat memberi motivasi dan semangat kepada sesama
          pengguna di website <b>Health.In</b></p>
        </div>
        <Link to='/support'>
        <Button name='Mulai' className='content-pelayanan' />
        </Link>
      </div>
      <div className='content-team'>
        <div className='content-team-header' data-aos="fade-up" data-aos-duration="1500">
          <h1>Our Team</h1>
          <p>Selama pembuatan dan pengembangan aplikasi <b>Health.In</b>, kami memiliki tim yang terdiri dari 4 orang</p>
        </div>
        <div className='content-team-main'>
          <TeamProject
            ImgOrang={rahmat}
            link='https://www.linkedin.com/in/rahmat-hidayat29/'
            nama='Rahmat Hidayat'
            info='Univeritas Raharja'
            deskripsi='“Take your time healing, as long as you want. Nobody else knows what you’ve been through. How could they know how long it will take to heal you?” — Abertoli' />
          <TeamProject
            ImgOrang={ulil}
            link='https://www.linkedin.com/in/yoga-ulil-al-baab-b7a63b247/'
            nama='Yoga Ulil Al Baab'
            info='Univeritas Raharja'
            deskripsi='“Happiness can be found even in the darkest of times, if one only remembers to turn on the light.” — Albus Dumbledore
            ' />
          <TeamProject
            ImgOrang={alfian}
            link='https://id.linkedin.com/in/alfian-nasrullah-ba4158256'
            nama='Moch. Alfian Nasrullah'
            info='Politeknik Elektronika Negeri Surabaya'
            deskripsi='“You can’t control everything. Sometimes you just need to relax and have faith that things will work out. Let go a little and just let life happen.” — Kody Keplinger' />
          <TeamProject
            ImgOrang={audy}
            link='https://www.linkedin.com/in/audyistanianarita/'
            nama='Audy Istania Narita'
            info='Politeknik Elektronika Negeri Surabaya'
            deskripsi='“Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open.” — Steven Aitchison' />
        </div>
      </div>
    </div>
  )
}
