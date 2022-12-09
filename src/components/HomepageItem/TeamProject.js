import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TeamProject extends Component {
  render() {
    return (
      <div className='team-project' data-aos="fade-up" data-aos-duration="1500">
        <div className='team-project-content'>
          <p>{this.props.deskripsi}</p>
          <div className='team-project-content-isi'>
            <img className='img-profile' src={this.props.ImgOrang} alt='orang'></img>
            <a href={this.props.link} target='blank'>
              <div>
                <h5>{this.props.nama}</h5>
                <p>{this.props.info}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

TeamProject.propTypes = {
  deskripsi: PropTypes.string.isRequired,
  ImgOrang: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,

}
