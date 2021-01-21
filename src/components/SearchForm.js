import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchForm = ({ videoURL, sendSubmission }) => {
  const [video, setVideo] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const initState = {
    title: ''
  }

  const onInputChange = (event) => {
    const externalVideo = {
      ...video,
    };

    externalVideo[event.target.name] = event.target.value
    setVideo(externalVideo);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    sendSubmission(video);

    setVideo(initState);
  }
  const getVideos = () => {
    axios.get(videoURL)
      .then((response) => {
        console.log(response);
        const result = response.data;
        console.log(result);
        setVideo(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }


  return (
    <div>
      <h1>Search for Video:</h1>
      <form
        className="new-video-form__form"
        onSubmit={onFormSubmit}>
        <label
          className="new-video-form__form-label">
          Title:</label>
        <textarea
          name='text'
          placeholder='The Land before Time'
          value={video.title}
          type='text'
          onChange={onInputChange}
          className={video.title === '' ? 'blankInput' : 'typedInput'} />
        <div className="NewvideoForm__submit">
          <input
            type="submit"
            value="Find Video"
            className="new-video-form__form-button" />
        </div>
      </form>
    </div>
  )
};

SearchForm.propTypes = {

};

export default SearchForm;