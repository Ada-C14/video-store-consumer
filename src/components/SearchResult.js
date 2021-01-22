import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './SearchResult.css';

const SearchResult = (props) => {
    const ADD_VIDEO_URL = 'http://localhost:3000/videos'

    const [displayMessage, setDisplayMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const onAddVideo = (event) => {
        event.preventDefault();
        const newVideo = {...props, inventory: 10}

        axios.post(ADD_VIDEO_URL, newVideo)
        .then((response) => {
            console.log(response.data)
            setDisplayMessage(`Video: ${props.title} was added to library`);
        })
        .catch((error) => {
            setErrorMessage('Video is already in the library')
        });
    }


  return (
    <div className="search-result">
        {displayMessage ? <div > <h3>{displayMessage}</h3></div> : ''}
        {errorMessage ? <div > <h3>{ errorMessage} </h3></div> : ''}
      <img src={props.image_url} alt={props.title} />
      <div className="video-description">
        <h3>{props.title}</h3>
        <p>Release Date: {props.release_date}</p>
        <p>Overview: {props.overview}</p>
        <button onClick={onAddVideo}>Add to Video Library</button>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  'release_date': PropTypes.string.isRequired,
  'image_url': PropTypes.string.isRequired,
  'external_id': PropTypes.number.isRequired
};

export default SearchResult;
