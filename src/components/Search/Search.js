import React, { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResultItem from './SearchResultItem';
import axios from 'axios'


const Search = () => {
  const BASE_URL = 'http://localhost:3000/'
  const SEARCH_API_PATH = '/videos?query='

  const [searchResults, setSearchResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const onSearch = (searchTerm) => {  
    axios.get(BASE_URL + SEARCH_API_PATH + searchTerm)
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
      { errorMessage ? errorMessage : null}
      <SearchBar onSearchCallback={onSearch} />


      <div className='search-results'>
        {searchResults.map( (item, id) => (
          <SearchResultItem item={item} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Search