import React, { useState } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'
import SearchResultItem from './SearchResultItem';
import './Search.css'


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
        setErrorMessage(error.message)
      })
  }

  return(
    <div>

      <SearchBar onSearchCallback={onSearch} />


      <div className='search-results'>
        {searchResults.map( (item, id) => (
          <SearchResultItem item={item} key={id} addVideoCallback={addVideoCallback}/>
        ))}
      </div>
    </div>
  )
}

export default Search