import React, { useState } from 'react';
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
import Home from './components/Home';
import SearchBar from './components/SearchBar';

function App() {

  const BASE_URL = 'http://localhost:3000'

//   const searchVideo = (searchQuery) => { 

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

  //   {
  //     searchResultComponentArray.push(
  //       <SearchResult
  //           key={result.id}
  //           id={result.id}
  //           title={result.title}
  //           overview={result.overview}
  //           releaseDate={result.release_date}
  //           externalId={result.external_id}
  //           imageUrl={result.image_url}
  //           // onClickCallback={onButtonClick}
  //       />
  //     )
  //   }

  //   return searchResultComponentArray;
  // }; 

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
            <Videos baseUrl={BASE_URL}/>
          </Route>
          <Route path="/customers">
            <Customers baseUrl={BASE_URL}/>
          </Route>
          <Route path="/checkout">
            <h1>Checkout Deets Will Go Here</h1>
          </Route>
          <Route path="/search">
            <SearchBar baseUrl={BASE_URL} />
          </Route>
        </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
