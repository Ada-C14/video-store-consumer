import React from 'react';
import PropTypes from 'prop-types';

import './Video.css';

const Video = (props) => {

  const selectThisVideo = (event) => {
    event.preventDefault();
    props.onSelectVideoCallback(props.id)
  }

  return (
    <div
      className={`container ${props.selectedVideo && props.id === props.selectedVideo.id ? 'selected' : ''}`} 
      onClick={selectThisVideo}
    >
      <section className='video-image'>
        <img src={props.imageUrl} alt={`${props.title} movie cover`}/>
      </section>
      <section className='video-description'>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.overview}</p>
      </section>
    </div>
  )
}

Video.propTypes = {
  onSelectVideoCallback: PropTypes.func
};

export default Video;