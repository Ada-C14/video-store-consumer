import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchResult = (props) => {

  const ADD_VIDEO_URL = 'http://localhost:3000/videos'

  const [displayMessage, setdisplayMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSelectAdd = (event) => {
      const newVideoData = {...props}

      axios.post(ADD_VIDEO_URL, newVideoData)
        .then((response) => { 
          console.log(response.data)
          setdisplayMessage(`Added: ${props.title} to library`);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
  }

  return (
    <div>
      <section>
        {displayMessage ? <div> <h3>{displayMessage}</h3></div> : ''}
        {errorMessage ? <div> <h3>{ errorMessage} </h3></div> : ''}
      </section>
      <section>
        <h3>{props.title}</h3>
        <img src={props.image_url} alt='video cover'/>
        <p> Overview: {props.overview} </p>
        <p> Release Date: {props.release_date}</p>
        <button className="add-to-library" onClick={onSelectAdd}> Add Video To Libray </button>
      </section> 
    </div>
  )
}

export default SearchResult;