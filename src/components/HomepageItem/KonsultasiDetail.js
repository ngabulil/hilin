import React from 'react'
import KonsultasiDetailIcon  from '../../assets/konsultasi.png'
import KonsultasiButton from './KonsultasiButton'

export default function KonsultasiDetail() {
  return (
    <div>
        <div>
            <img src={KonsultasiDetailIcon} alt='Article Icon'></img>
        </div>
        <div>
            <h1>Article</h1>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        </div>
        <div>
            <KonsultasiButton/>
        </div>
    </div>
  )
}