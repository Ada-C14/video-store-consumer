import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import Customers from './components/Customers';

import './App.css';
import Customers from './Customers';

<<<<<<< HEAD

const App = () => {
  // render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Customers />
      </div>
    );
  // }
=======
const App = () => {
  const API_BASE_URL = 'http://localhost:3000';

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Video Search</Link>
            </li>
            <li>
              <Link to="/library">Video Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/search'>
            <VideoSearch url={API_BASE_URL}/>
          </Route>
          <Route path='/library'>
            <VideoLibrary url={API_BASE_URL}/>
          </Route>
          <Route path="/customers">
            <Customers url={API_BASE_URL}/>
          </Route>
          <Route path="/">
            Welcome
          </Route>
        </Switch>
      </div>
    </Router>
  );
>>>>>>> 6efb61b4fe2bfd79e750fef42c728b9dd1a0f8d6
}

export default App;
