import React, { useState } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'
import Video from '../VideoLibrary/Video'
import './Search.css'



const Search = ({setErrorMessage, addVideoCallback, baseUrl}) => {
  const SEARCH_API_PATH = 'videos?query='

  const [searchResults, setSearchResults] = useState([])

  const onSearch = (searchTerm) => {  
    axios.get(baseUrl + SEARCH_API_PATH + searchTerm)
      .then( response => {
        const newSearchResults = response.data
        setSearchResults(newSearchResults)

        if ( newSearchResults.length === 0) {
          setErrorMessage({ error: ['No matches were found.']})
        }

        setTimeout(() => setErrorMessage(null), 6000);
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
        setTimeout(() => setErrorMessage(null), 6000);
      })
  }

  const videoComponents = searchResults.map((video) => {
    return(
    <Video key={video.external_id} video={video} addVideoCallback={addVideoCallback} currentPathname={window.location.pathname}/>)
  })

  return(
    <div className='search'>
      <SearchBar onSearchCallback={onSearch} />

      <div className="video-list search-results">
        {videoComponents}
      </div>
    </div>
  )
}

Search.propTypes = {
  setErrorMessage: PropTypes.func.isRequired,
  addVideoCallback: PropTypes.func.isRequired,
  baseUrl: PropTypes.string.isRequired
}

export default Search