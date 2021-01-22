import React from 'react';
import PropTypes from 'prop-types';

import './SearchResult.css';

const SearchForm = (props) => {
  const addSearchResult = () => {
    const searchResult = {
      title: props.title,
      overview: props.overview,
      /* eslint-disable camelcase */
      release_date: props.releaseDate,
      image_url: props.imageUrl,
      external_id: props.externalId
      /* eslint-enable camelcase */
    };

    props.addVideoCallback(searchResult);
  };

  return (
    <div className="search-result">
      <img src={props.imageUrl} alt={props.title} />
      <div className="video-description">
        <h3>{props.title}</h3>
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
  addVideoCallback: PropTypes.func.isRequired
};

export default SearchForm;