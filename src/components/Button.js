import React, { Component } from 'react';

export default class GetStartBtn extends Component {
  render() {
    return (
      <div>
        <button className='btn-started'>{this.props.name}</button>
      </div>
    )
  }
}


