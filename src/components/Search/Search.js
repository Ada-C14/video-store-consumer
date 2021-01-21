import React, { useState } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'
// import SearchResultItem from './SearchResultItem';
import './Search.css'
import Video from '../VideoLibrary/Video'


const Search = ({setErrorMessage, addVideoCallback, baseUrl}) => {
  const SEARCH_API_PATH = 'videos?query='

  const [searchResults, setSearchResults] = useState([])

  const onSearch = (searchTerm) => {  
    axios.get(baseUrl + SEARCH_API_PATH + searchTerm)
      .then( response => {
        setSearchResults(response.data)
        setErrorMessage('')
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      })
  }

  const videoComponents = searchResults.map((video) => {
    return(<Video key={video.id} video={video} addVideoCallback={addVideoCallback} currentPathname={window.location.pathname}/>)
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

export default Search