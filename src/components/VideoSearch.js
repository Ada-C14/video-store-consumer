import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const VideoSearch = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchVideos = videoTitle => {
    axios.get(`${props.url}/videos?query=<${videoTitle}>`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const searchResultComponents = searchResults.map((videoObj, i) => {
    return (
      <SearchResult
      key={i}
      title={videoObj.title}
      overview={videoObj.overview}
      releaseDate={videoObj.release_date}
      imageUrl={videoObj.image_url}
      externalId={videoObj.external_id} />
    );
  });

  return (
    <div className="board">
      { errorMessage ? <div>{errorMessage}</div> : '' }
      <SearchForm searchVideosCallback={searchVideos} />
      {searchResultComponents}
    </div>
  );
};

VideoSearch.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoSearch;