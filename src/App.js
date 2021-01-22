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
import Checkout from './components/Checkout'

function App() {

  const BASE_URL = 'http://localhost:3000'

  const [ selectedCustomer, setSelectedCustomer ] = useState(null)
  const [ selectedVideo, setSelectedVideo ] = useState(null)



  // select function - what is used to id whats been selected
  const selectCustomer = (customer) => {
    setSelectedCustomer(customer) }
  const selectVideo = (video) => {
    setSelectedVideo(video)
  }


  // return display of selected Cust/Vid
  // rental button - triggers event that posts to checkout


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
          <button className="btn btn-outline-danger"><Link to="/">Home</Link></button>
          <button className="btn btn-outline-danger"><Link to="/library">Video Library</Link></button>
          <button className="btn btn-outline-danger"><Link to="/customers">Customer Index</Link></button>
          <button className="btn btn-outline-danger"><Link to="/search">Search</Link></button>
          <Checkout baseUrl={BASE_URL} selectedCustomer={selectedCustomer} selectedVideo={selectedVideo} />
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
            <Videos baseUrl={BASE_URL} selectedVideoCallback={selectVideo}/>
          </Route>
          <Route path="/customers">
            <Customers baseUrl={BASE_URL} selectedCustomerCallback={selectCustomer}/>
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
