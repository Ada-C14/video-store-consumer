import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import './Search.css';


const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchComponents, setSearchComponents] = useState([])

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    // on submit, we make a call to the API using the searchTerm entered. 
    const SEARCH_URL = `http://localhost:3000/videos`

    axios.get(SEARCH_URL, {
      params: {
        query: searchTerm
      }
    })
      .then((response) => { 
        setSearchResults(response.data);   // update state
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });


    const searchComponents = searchResults.map((video) => {
      return(< SearchResult 
        key={video.id}
        id={video.id}
        title={video.title} 
        overview={video.overview}
        release_date={video.release_date}
        image_url={video.image_url}
        external_id={video.external_id}
        inventory={video.available_inventory}
      />);
    });
    setSearchComponents(searchComponents)
  } 

  return (
    <div className="searchbar">
      <h1 className="search">Search</h1>
      <form className = 'searchform' onSubmit={onSubmitForm}>
        <input onChange={onInputChange} value={searchTerm} />
        <input className="submit" type="submit" value="Submit"/>
      </form>
      <section> {searchComponents} </section>
    </div>
  );
}

export default Search;


