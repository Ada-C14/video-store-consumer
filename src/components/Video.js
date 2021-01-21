import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  return (
    <div className="video">
      <ul className="video-details">
        <li>Title: {props.title}</li>
        <li>Overview: {props.overview}</li>
        <li>Release Date: {props.releaseDate}</li>
        <li>{props.imageUrl}</li>
        <li> inventory: {props.inventory}</li>
      </ul>
    </div>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Video;
