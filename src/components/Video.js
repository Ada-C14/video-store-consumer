import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  const onSelectButtonClick = () => {
    if (props.title !== props.selectedVideo.title) {
      props.onClickSelect(props.video)
    } else {
      props.onClickSelect('')
    };
  };
  return (
    <div className="video">
      <ul className="video-details">
        <li>Title: {props.title}</li>
        <li>Overview: {props.overview}</li>
        <li>Release Date: {props.releaseDate}</li>
        <li>{props.imageUrl}</li>
        <button onClick={onSelectButtonClick} >
        {props.title === props.selectedVideo.title ? 'unselect' : 'select'}
      </button>
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
