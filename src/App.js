import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './vhs.jpg';
import divider from './stars.png'
import './App.css';
import './Bootstrap.css'
import Customers from './components/Customers';
import Videos from './components/Videos';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import Home from './components/Home';

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
        <nav>
          <h1><a href="/">RETRO VIDEO DISTRO</a></h1>
          <span>
          <button type="button" class="btn btn-outline-danger"><Link to="/">Home</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="/library">Video Library</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="/customers">Customer Index</Link></button>
          <button type="button" class="btn btn-outline-danger"><Link to="/search">Search</Link></button>
          </span>
          <br></br><br></br>
          <img src={divider} className="divider" alt="stars divider" />
          <br></br><br></br>
        </nav>
        <section className="App-main">
          <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="/search">
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
          </Route>
        </Switch>
        </section>
      </div>
    </Router>
  );

}

export default App;
