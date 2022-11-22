import React from 'react';
import TeamProject from './TeamProject';
import Button from '../Button';

export default function HeaderHomepage4() {
  return (
    <div className="container-4">
      <div className="content-pelayanan">
        <div className="content-pelayanan-isi">
          <h1>Reservasi Pelayanan kami sekarang</h1>
          <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        </div>
        <Button name="Mulai" className="content-pelayanan" />
      </div>
      <div className="content-team">
        <div className="content-team-header">
          <h1>Our Team</h1>
          <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        </div>
        <div className="content-team-main">
          <TeamProject
            nama="Rahmat Hidayat"
            info="Univeritas Raharja"
            deskripsi="Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif)."
          />
          <TeamProject
            nama="Yoga Ulil Al Baab"
            info="Univeritas Raharja"
            deskripsi="Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif)."
          />
          <TeamProject
            nama="Moch. Alfian Nasrullah"
            info="Politeknik Elektronika Negeri Surabaya"
            deskripsi="Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif)."
          />
          <TeamProject
            nama="Audy Istania Narita"
            info="Politeknik Elektronika Negeri Surabaya"
            deskripsi="Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif)."
          />
        </div>
      </div>
    </div>
  );
}
