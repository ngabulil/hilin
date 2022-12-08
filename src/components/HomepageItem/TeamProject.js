import React, { Component } from 'react';
import ImgOrang from '../../assets/ulil.png';

export default class TeamProject extends Component {
  render() {
    return (
      <div className='team-project' data-aos="fade-up" data-aos-duration="1500">
        <div className='team-project-content'>
          <p>{this.props.deskripsi}</p>
          <div className='team-project-content-isi'>
            <img className='img-profile' src={ImgOrang} alt='orang'></img>
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
