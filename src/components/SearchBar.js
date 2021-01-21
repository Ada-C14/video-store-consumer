import axios from 'axios';
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const SearchBar = (props) => {

    const [searchResultList, setSearchResultList] = useState([]);

    const searchVideo = (searchQuery) => { 

        axios.get(`${props.baseUrl}/videos?query=${searchQuery}`)
        .then((response) => {
          console.log(response.data);
          //  response.data;
          // console.log(apiCustomerResponse[0].name)
          // Set the state
          setSearchResultList(response.data);
        })
        .catch((error) => {
          // setErrorMessage(error.message);
          // console.log(error.message);
        });

    };

    const addVideo = (id) => {
        axios.post(`${props.baseUrl}/videos/${id}`)
          .then((response) => {
            // What should we do when we know the post request worked?
            console.log(response)
            // const updatedData = [...studentList, response.data];
            // setStudentList(updatedData);
            // setErrorMessage('');
          })
          .catch((error) => {
            // What should we do when we know the post request failed?
            // setErrorMessage(error.message);
          });
      }

    const generateSearchResults = (searchResults) => {
    let searchResultComponentArray = [];

    for (const result of searchResults) 

    {
        searchResultComponentArray.push(
        <SearchResult
            key={result.id}
            id={result.id}
            title={result.title}
            overview={result.overview}
            releaseDate={result.release_date}
            externalId={result.external_id}
            imageUrl={result.image_url}
            // onClickCallback={onButtonClick}
        />
        )
    }

    return searchResultComponentArray;
    }; 

    return (
        <div>
            <h1>Search Order Catalog</h1>
            <br></br>
            <h4>Is there a video we should carry??  Search our order catalog to see if we can add it to our library!</h4>
            <br></br>
            <SearchForm searchCallback={searchVideo} />
            { searchResultList.length === 0 ? 
                <h4>Search for a title keyword above!</h4> 
                : 
                <div><br></br><h4>Search Results</h4><br></br> 
                <section className="container w-75">
                    <table className="table table-hover">
                    <thead>
                    <tr className="table-primary">
                    <th scope="col">Poster</th>
                    <th scope="col">Title</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Add To Library?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {generateSearchResults(searchResultList)}
                    </tbody>
                    </table>
                </section>
                </div> 
            }
        </div>
    )
  }
  
  SearchBar.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default SearchBar;    