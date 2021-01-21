import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Customers from './components/Customers';
import Videos from './components/Videos';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';




function App() {

  const BASE_URL = 'http://localhost:3000'
  const [searchResultList, setSearchResultList] = useState([]);

  const searchVideo = (searchQuery) => { 

        axios.get(`${BASE_URL}/videos?query=${searchQuery}`)
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

const generateSearchResults = (searchResults) => {
  let searchResultComponentArray = [];

  for (const result of searchResults) 

  {
    searchResultComponentArray.push(
      <SearchResult
          key={result.id}
          id={result.id}
          title={result.title}
      />
    )
  }

  return searchResultComponentArray;
}; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      <Customers baseUrl={BASE_URL}/>
      <Videos />
      <SearchForm searchCallback={searchVideo} />
      {generateSearchResults(searchResultList)}
      </p>
    </div>
  );

}

export default App;
