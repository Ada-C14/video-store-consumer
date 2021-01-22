import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './SearchBar.css'


const SearchBar = ({ onSearchCallback }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return(
    <div className='search-bar'>
      <label>Search Movie Title: </label>
      <InputGroup className="mb-3">
        <FormControl
          onChange={onInputChange} 
          value={searchTerm}
          placeholder="Search Movie Title"
          aria-label="Search Movie Title"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button onClick={() => {onSearchCallback(searchTerm)}} variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchCallback: PropTypes.func.isRequired
}

export default SearchBar