import React from 'react';
import PropTypes from 'prop-types';
import './DisplayVideoDetail.css';

const DisplayVideoDetail = ({ video }) => {

  if (!video.title) return null; 

  return <div className="video-container">
    <h3>Video Details:</h3>
    <h5>
      <span className="video-details">Video: </span>{video.title}
    </h5>
    <p>
      <span className="video-details">Release Date: </span>{video.release_date},
      <span className="video-details">Overview: </span>{video.overview}
    </p>
    <img src={ video.image_url } alt={ `${video.title} image` } />
  </div>
};

DisplayVideoDetail.propTypes = {
  selectedVideo: PropTypes.object,
};

export default DisplayVideoDetail;