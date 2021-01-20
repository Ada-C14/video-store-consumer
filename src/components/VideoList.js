import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ApiVideo from './ApiVideo';


// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/videos'

const VideoList = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}?query=${props.keyWord}`)
      .then((response) => {
        const apiVideoList = response.data;
        if (apiVideoList.length !== 0) {
          setVideoList([...apiVideoList]);
        } else {
          setVideoList(apiVideoList)
        }
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, [props.keyWord]);

  const addVideo = (video) => {
    axios.post(`${BASE_URL}`, video)
    .then((response) => {
      // What should we do when we know the post request worked?
      setErrorMessage('');
    })
    .catch((error) => {
      // What should we do when we know the post request failed?
      setErrorMessage(error.message);
    });
  }

  const videoComponents = videoList.map((video) => {
    return (
      <ApiVideo
        title={video.title}
        overview={video.overview}
        releaseDate={video.release_date}
        imageUrl={video.image_url}
        externalId={video.external_id}
        addVideoCallback={addVideo}
      />
    )
  })
  return (
    <div data-testid={props.keyWord}>
      <div className="validation-errors-display">
        <h2 className="validation-errors-display__list">
          {errorMessage ? `${errorMessage}` : ''}
        </h2>
      </div>
      <div className="board">
        {videoComponents}
      </div>
    </div>
  )
};
VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(
    { title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      externalId: PropTypes.number.isRequired,
    },
  )),
  keyWord: PropTypes.string.isRequired,
};

export default VideoList;
