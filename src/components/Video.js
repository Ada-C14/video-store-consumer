import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  return (
    <div className="video-box">
      <span className='video-image'><img src={props.imageUrl} alt={`${props.title} movie cover`}/></span>
      <span>{props.title} - {props.overview} - {props.release_date}</span>
    </div>
    
  );
  
  
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  // eslint-disable-next-line camelcase
  release_date: PropTypes.string
};
export default Video;