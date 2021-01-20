import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const Video = props => {
  return (
    <div className='videoCard'>
      <img src={props.imageURL} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>Released Date {props.releaseDate}</p>
      <p>Overview {props.overview}</p>
    </div>
  );
};

Video.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default Video;