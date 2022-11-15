import React from 'react'
import ArticleItem from './ArticleItem'
import MentalTestItem from './MentalTestItem'
import KonsultasiItem from './KonsultasiItem'

export default function HeaderHomepage2() {
  return (
    <div className='container-2'>
      <h1>Layanan Kami</h1>
      <div className='container-2-content'>
        <ArticleItem/>
        <MentalTestItem/>
        <KonsultasiItem/>
      </div>
    </div>
  )
}
