import React, { useState } from 'react';
import './Video.css';

const Video = (props) => {

  const onVideoClick = () => {
    props.onClickCallBack(props.video);
  }

  return (
    <button className="video-button" onClick={ onVideoClick }>
      { props.video.title }
    </button>
  );
}

export default Video;