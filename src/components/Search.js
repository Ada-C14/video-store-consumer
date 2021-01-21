import React, {useState} from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';

const Search = () => {

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
    <div className="search">
      <h1 className="body-header">Search</h1>
      <form onSubmit={onSubmitForm}>
        <input onChange={onInputChange} value={searchTerm}/>
        <input className="search" type="submit" value="Submit"/>
      </form>
      <section> {searchComponents} </section>
    </div>
  );
}

//Proptypes
export default Search;