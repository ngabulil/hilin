import React from 'react'
import ServiceContentItem from './ServiceContentItem'
import MentalTestDetail from './MentalTestDetail'
import Article from '../../assets/article.png'
import Konsultasi from '../../assets/konsultasi.png'

export default function HeaderHomepage3() {
  return (
    <div className='container-3'>
      <ServiceContentItem
      img={Article}
      title='Article'
      description='Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).'
      />
      <MentalTestDetail/>
      <ServiceContentItem
      img={Konsultasi}
      title='Konsultasi'
      description='Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).'
      />
    </div>
  )
}
