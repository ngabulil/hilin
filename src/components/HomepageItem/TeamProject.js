import React, { Component } from 'react';
import ImgOrang from '../../assets/orang.png';

export default class TeamProject extends Component {
  render() {
    return (
      <div className='team-project'>
        <div className='team-project-content'>
            <p>{this.props.deskripsi}</p>
            <div className='team-project-content-isi'>
                <img src={ImgOrang} alt='orang'></img>
                <div>
                    <h5>{this.props.nama}</h5>
                    <p>{this.props.info}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
