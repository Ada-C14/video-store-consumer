import React, { useState } from 'react';
import './Videos.css';
import DisplayVideoDetail from './DisplayVideoDetail';
import VideoList from './VideoList';

const Videos = (props) => {
  const [selectedVideo, setSelectedVideo] = useState();

  const setSelectedVideoCallBack = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="videos">
      <VideoList setSelectedVideoCallBack={ setSelectedVideoCallBack } />
      {
        selectedVideo &&
        <DisplayVideoDetail video={ selectedVideo } />
      }
    </div>
  );
};

export default Videos;