import React from 'react';
import PropTypes from 'prop-types';

import './SearchResult.css';

const VideoSearchForm = (props) => {
  return (
    <div className="search-result">
      <img src={props.imageURL} alt={props.title} />
      <div className="video-description">
        <h3>{props.title}</h3>
        <p>Release Date: {props.releaseDate}</p>
        <p>Overview: {props.overview}</p>
        <button>Add to Video Library</button>
      </div>
    </div>
  );
};

VideoSearchForm.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  externalId: PropTypes.number.isRequired
};

export default VideoSearchForm;
