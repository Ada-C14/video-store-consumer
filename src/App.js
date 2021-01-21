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
<<<<<<< HEAD
=======
import Customers from './components/Customers';
>>>>>>> aac2a85f2c06a122aa78c48c412d25b1107ece48

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

}

export default App;
