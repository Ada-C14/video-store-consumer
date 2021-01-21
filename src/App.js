import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './vhs.jpg';
import './App.css';
import './Bootstrap.css'
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

  const addVideo = (id) => {
    axios.post(`${BASE_URL}/videos/${id}`)
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
    <Router>
      <div className="App">
        <header className="App-header tiledBackground">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <section>
          <h1><a href="/">RETRO VIDEO DISTRO</a></h1>
          <button type="button" class="btn btn-outline-danger"><Link to="/">Home</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="/library">Video Library</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="/customers">Customer Index</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="">Search</Link></button>
          <br></br><br></br>
          <br></br><br></br>
        </section>
        <section className="App-main">
          <Switch>
          <Route path="/search">
            <h1>Search Will Go Here</h1>
          </Route>
          <Route path="/library">
            <Videos />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/checkout">
            <h1>Checkout Deets Will Go Here</h1>
          </Route>
          <Route path="/">
            <h1>Homepage Deets Will Go Here</h1>
          </Route>
        </Switch>
        </section>
      </div>
    </Router>
  );

}

export default App;
