import React from 'react';
import PropTypes from 'prop-types';

const DisplayVideoDetail = ({ addToLibraryCallback, video }) => {

  if (!video.title) return null; 

  return <div className="video-container">
    <h3>
      <span className="video-details"></span>{video.title}
    </h3>
    <p>
      <span className="video-details">Release Date: </span>{video.release_date},
      <span className="video-details">Overview: </span>{video.overview}
    </p>
    <img src={ video.image_url } alt={ `${video.title} image` } />
    <br></br>
    {
      addToLibraryCallback &&
      <button className='btn btn-primary' onClick={ () => { addToLibraryCallback(video) } }>
        Add To Library
      </button>
    }
  </div>
};

DisplayVideoDetail.propTypes = {
  selectedVideo: PropTypes.object,
};

export default DisplayVideoDetail;