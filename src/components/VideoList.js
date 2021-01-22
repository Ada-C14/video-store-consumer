import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ApiVideo from './ApiVideo';
import './VideoList.css';


const VideoList = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (props.keyWord !== '') {
      const source = axios.get(`${props.url}${props.focus}?query=${props.keyWord}`)
        .then((response) => {
          const apiVideoList = response.data;
          if (apiVideoList.length !== 0) {
            setVideoList([...apiVideoList]);
            setErrorMessage(null)
          } else {
            setErrorMessage(`Unable to find "${props.keyWord}"`)
            setVideoList([])
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setVideoList([])
      setErrorMessage(null)
    }
  }, [props.keyWord]);

  const addVideo = (video) => {
    axios.post(`${props.url}${props.focus}?external_id=${video.externalId}&release_date=${video.releaseDate}&image_url=${video.imageUrl}`, video)
    .then((response) => {
      setErrorMessage(`"${video.title}" is added`);
    })
    .catch((error) => {
      setErrorMessage(`You already have "${video.title}"`);
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
      <div className="list">
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
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  keyWord: PropTypes.string.isRequired,
};

export default VideoList;
