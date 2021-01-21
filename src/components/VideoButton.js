import React, { useState } from 'react';
import './VideoButton.css';

const VideoButton = (props) => {

  const onVideoButtonClick = () => {
    props.onClickCallBack(props.video);
  }

  return (
    <button className="video-button btn btn-primary m-1" onClick={ onVideoButtonClick }>
      { props.video.title }
    </button>
  );
}

export default VideoButton;