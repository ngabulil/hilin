import React from 'react'
import ArticleDetailIcon from '../../assets/article.png'
import ArticleButton from './ArticleButton'


export default function ArticleDetail() {
  return (
    <div>
        <div>
            <img src={ArticleDetailIcon} alt='Article Icon'></img>
        </div>
        <div>
            <h1>Article</h1>
            <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
        </div>
        <div>
            <ArticleButton/>
        </div>
    </div>
  )
}
