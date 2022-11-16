import React, { Component } from 'react'
import Button from '../Button'

export default class ServiceContentItem extends Component {
  render() {
    return (
      <div className='article-detail'>
        <div className='article-detail-img'>
            <img src={this.props.img} alt='Article Icon'></img>
        </div>
        <div className='article-detail-content'>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <Button name='Mulai'/>
        </div>
            
    </div>
    )
  }
}

