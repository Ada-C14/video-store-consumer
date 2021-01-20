import React from 'react';
import Video from './Video'
import PropTypes from 'prop-types';

import './Library.css';

const Library = (props) => {
  const library = props.videos.map((video) => {
    return <Video
            key={video.id}
            id={video.id}
            title={video.title}
            overview={video.overview}
            releaseDate={video.release_date}
            imageUrl={video.image_url}
            onSelectVideoCallback={props.onSelectVideoCallback}
            selectedVideo={props.selectedVideo}
          />
  });

  return (
    <div className='main-container'>
      {library}
    </div>
  )
}

Library.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string,
      releaseDate: PropTypes.string,
      imageUrl: PropTypes.string
    })
  )
};

export default Library;