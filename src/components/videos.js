import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Videos = () => {
  const VIDEO_URL = 'http://localhost:3000/videos';
  const [videoList, setvideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(VIDEO_URL)
      .then((response) => {
        const videos = response.data;
        console.log(videos)
        setvideoList(videos);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const showvideos = videoList.map((video) => {
    return (
      <div>
          <p>{video.id} {video.title}</p>
        {/* TODO, decide what else to include?
        Choices are:
        overview
        release_date
        image_url
        external_id */}
      </div>
    )
  })


  return (
    <div>
      {showvideos}
    </div>
  )

};

Videos.propTypes = {

};

export default Videos;