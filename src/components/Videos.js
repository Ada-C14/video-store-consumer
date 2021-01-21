import React from 'react';
import VideoList from './VideoList';

const Videos = ({ setSelectedVideoCallBack }) => {
  return (
    <div className="videos">
      <VideoList setSelectedVideoCallBack={ setSelectedVideoCallBack } />
    </div>
  );
};

export default Videos;