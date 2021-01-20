import React from 'react';
import PropTypes from 'prop-types';
import './DisplayVideoDetail.css';

const DisplayVideoDetail = (props) => {

  if (!props.video.title) return null; 

  return <div className="video-container">
    <h3>Video Details:</h3>
    <h5>
      <span className="video-details">Video: </span>{props.video.title}
    </h5>
    <p>
      <span className="video-details">Release Date: </span>{props.video.release_date},
      <span className="video-details">Overview: </span>{props.video.overview}
    </p>
    <img src = {props.video.image_url} alt="image"/>
  </div>
};

export default DisplayVideoDetail