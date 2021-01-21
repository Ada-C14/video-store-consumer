import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ApiVideo from './ApiVideo';


const VideoList = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.focus}?query=${props.keyWord}`)
      .then((response) => {
        const apiVideoList = response.data;
        if (apiVideoList.length !== 0) {
          setVideoList([...apiVideoList]);
        } else {
          setVideoList(apiVideoList)
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [props.keyWord]);

  const addVideo = (video) => {
    axios.post(`${props.url}${props.focus}`, video)
    .then((response) => {
      setErrorMessage('');
    })
    .catch((error) => {
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
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  keyWord: PropTypes.string.isRequired,
};

export default VideoList;
