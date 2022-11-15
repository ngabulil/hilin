import React from 'react'
import ArticleDetail from './ArticleDetail'
import KonsultasiDetail from './KonsultasiDetail'
import MentalTestDetail from './MentalTestDetail'

export default function HeaderHomepage3() {
  return (
    <div className='container-3'>
      <ArticleDetail/>
      <MentalTestDetail/>
      <KonsultasiDetail/>
    </div>
  )
}
