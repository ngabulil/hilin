import React from 'react'
import ServiceItem from './ServiceItem'
import IconArticle from '../../assets/icon article.png'
import IconMental from '../../assets/icon mental.png'
import IconKonsultasi from '../../assets/icon konsultasi.png'

export default function HeaderHomepage2() {
  return (
    <div className='container-2'>
      <h1>Our Service</h1>
      <div className='container-2-content'>
        <ServiceItem
        icon={IconArticle}
        title='Article'
        description='Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis'
        />
        <ServiceItem
        icon={IconMental}
        title='Mental'
        description='Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis'
        />
        <ServiceItem
        icon={IconKonsultasi}
        title='Konsultasi'
        description='Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis'
        />
      </div>
    </div>
  )
}
