import React, { useState, useEffect } from 'react';
import './VideoList.css';
import PropTypes from 'prop-types'
import VideoButton from './VideoButton';
const BASE_URL = 'http://localhost:3000/videos';
const axios = require('axios');

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    axios.get(BASE_URL)

    .then((response) => {
      setVideos(response.data);
    });

  }, []);

  const setSelectedVideoCallBack = (video) => {
    setSelectedVideo(video);
  };

  const generateVideos = videos.map((video) => {
    return <VideoButton key={ video.id } video={ video } onClickCallBack={ setSelectedVideoCallBack } />
  })

  return (
  <div className="VideoList">
    <h3>Video List:</h3>
    { generateVideos }
    <div>
      <h4>Selected Video:</h4>
      { selectedVideo ? selectedVideo.title : null }
    </div>
  </div>);
};

VideoList.propTypes = {
  // setSelectedVideoCallBack: PropTypes.func.isRequired,
};

export default VideoList;