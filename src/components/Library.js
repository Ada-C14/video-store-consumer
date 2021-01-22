import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Video from './Video';

const Library = (props) => {
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
  axios.get(`${props.url}/videos`)
  .then((response) => {
      let videoList = response.data;
      setVideos(videoList)
  })
  .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);})
  }, []);

  const onChangeValue = (event) => {
    props.setSelectedVideoCallback(event.target.value)
  }

  const showVideos = videos.map((video) => {
    return(
      <div>
        <input type='radio' id={video.id} name='video' value={video.title} onChange={ onChangeValue } />
        <label htmlFor={video.title}>
          <Video key={video.id} id={video.id} title={video.title} overview={video.overview} release_date={video.release_date} imageUrl={video.image_url} />
        </label>
      </div>
    );
  });

  return (
    <div>
      <h1>Video Library</h1>
        {showVideos}
    </div>
  )

};

export default Library;
