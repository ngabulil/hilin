import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ServiceItem extends Component {
  render() {
    return (
      <div className='article-item'>
        <div className='article-item-icon'>
          <img src={this.props.icon} alt='icon article'></img>
        </div>
        <div className='article-item-content'>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

ServiceItem.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
