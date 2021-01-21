import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const Video = (props) => {

  const onVideoClick = () => {
    props.onVideoClickCallBack(props.id);
  }

  return (
    <div className='video'>
      <img src={props.imageURL} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>Release Date: {props.release_date}</p>
      <p>Overview: {props.overview}</p>
      <button onClick={ onVideoClick }>Select Video</button>
    </div>
  );
};

Video.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default Video;