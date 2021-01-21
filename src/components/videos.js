import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Videos = ( {videoURL, newVideo} ) => {
  const [videoList, setvideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (newVideo !== undefined) {
      setvideoList(newVideo);
    }
    axios.get(videoURL)
      .then((response) => {
        const videos = response.data;
        console.log(videos)
        setvideoList(videos);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, []);

  

  const showVideos = videoList.map((video) => {
    return (
      <div>
          {/* <p>{video.id} {video.title}</p>  */}
          <img src={video.image_url} alt={video.title}/>
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
      {showVideos}
    </div>
  )

};

Videos.propTypes = {

};

export default Videos;