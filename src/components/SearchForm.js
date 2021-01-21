import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchForm = ({ getVideo }) => {
  const initState = {
    title: ''
  }
  const [video, setVideo] = useState(initState);

  const onInputChange = (event) => {
    const externalVideo = event.target.value
    setVideo(externalVideo);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    getVideo(video);
    setVideo(initState);
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
          placeholder='ex: The Land before Time'
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