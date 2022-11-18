import React from 'react'
import Article from '../../utils/data.json'
import Button from '../Button'

export default function ArticleMainCard() {
  return (
    <div className='article-main-card-wrap'>
      {
        Article.map( Article => {
            return (
                <div className='article-main-card' key={Article.id}>
                    <img src={Article.img} alt='viva icon'></img>
                    <p>{Article.title}</p>
                    <a href={Article.link} target='blank'><Button name='Selengkapnya'></Button></a>
                </div>
            )
        })
      }
    </div>
  )
}
