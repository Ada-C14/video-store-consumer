import React, { useState, useEffect } from 'react';
import API from '../ApiSupport'
import SearchItem from './SearchItem';


const Search = () => {
  const [searchList, setSearchList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = (event) => {
    let query = event.target.value;
    API.get(`videos?query=${query}`)
      .then((response) => {
        const searchList = response.data;
        setSearchList(searchList);
      })
      .catch((error) => {
        setErrorMessage('Could not retrieve videos');
      });;
  }

  return (
    errorMessage == null ?
    
      <div>
        <h1>This is the search page.</h1>
        
        <input
          type="text"
          onChange={search} />
          
        {
          searchList.map(item => {
            return (
              <SearchItem
                id={item.external_id}
                title={item.title}
                overview={item.overview}
                release_date={item.release_date}
                image_url={item.image_url}
                />
            )
          })
        }
      </div>
      : errorMessage
  )
}

export default Search; 