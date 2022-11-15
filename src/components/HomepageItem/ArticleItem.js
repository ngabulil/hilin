import React from 'react'
import IconArticle from '../../assets/icon article.png'

export default function ArticleItem() {
  return (
    <div className='article-item'>
        <div className='article-item-icon'>
            <img src={IconArticle} alt='icon article'></img>
        </div>
        <div className='article-item-content'>
            <h3>Article</h3>
            <p>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
        </div>
        <div>
          
        </div>
    </div>
  )
}
