import React, { Component } from 'react'

export default class ArticleHeader extends Component {
  render() {
    return (
      <div className='article-header'>
        <h1>Artikel Terpopuler</h1>
        <div className='article-header-content'>
            <div className='article-header-content-item-1'>
                <img src={this.props.img} alt='icon article header'></img>
                <h1>{this.props.judul}</h1>
            </div>
            <div className='article-header-content-item-2'>
                <p>{this.props.description}</p>
            </div>
        </div>
      </div>
    )
  }
}
