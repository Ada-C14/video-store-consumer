import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './SearchResult.css';

const SearchForm = (props) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addSearchResult = (event) => {
    event.preventDefault();

    const videoObj = {
      title: props.title,
      overview: props.overview,
      /* eslint-disable camelcase */
      release_date: props.releaseDate,
      image_url: props.imageUrl,
      external_id: props.externalId
      /* eslint-enable camelcase */
    };

    axios.post(`${props.url}/videos`, videoObj)
      .then((response) => {
        setSuccessMessage(`Video ${props.externalId} has been added to the library`)
      })
      .catch((error) => {
        setErrorMessage(`Video ${props.externalId} is already in the library`);
      });
  };

  return (
    <div className="search-result">
      {successMessage ? <p className="success-msg">{successMessage}</p> : ''}
      {errorMessage ? <p className="error-msg">{errorMessage}</p> : ''}
      <img src={props.imageUrl} alt={props.title} />
      <div className="video-description">
        <h4>{props.title}</h4>
        <p>Release Date: {props.releaseDate}</p>
        <p>Overview: {props.overview}</p>
        <button onClick={addSearchResult}>Add to Video Library</button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  externalId: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default SearchForm;