import React, { useState } from 'react';

const SearchBar = ({ onSearchCallback }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return(
    <div>
      <label >Search Movie Title: </label>
      <input type='text' onChange={onInputChange} value={searchTerm} placeholder='Search'></input>

      <button onClick={() => {onSearchCallback(searchTerm)}} >Search</button>
    </div>
  )
}

export default SearchBar