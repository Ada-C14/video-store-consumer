import React from 'react';
import PropTypes from 'prop-types';

import Video from './Video';

const VideoList = (props) => {
  console.log(props.videos);
  const videoComponents = props.videoList.map((video, i) => {
    return (
      <li key={i}>
        <Video
          title={video.title}
          overview={video.overview}
          releaseDate={video.release_date}
          imageUrl={video.image_url}
          inventory={props.inventory}
          id={video.external_id}
          key={i}
        />
      </li>
    );
  });

  return <ul className="video-list">{videoComponents}</ul>;
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      overview: PropTypes.string,
      releaseDate: PropTypes.string,
      inventory: PropTypes.number,
      imageUrl: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default VideoList;
