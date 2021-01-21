import React, { Component } from 'react';
import VideoLibrary from './components/VideoLibrary'
import CustomerList from './components/CustomerList';
import SearchResultList from './components/SearchResultList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import child components: search

import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to='/customers'>Customers</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <SearchResultList />
            </Route>
            <Route path="/customers">
              <CustomerList />
            </Route>
            <Route path="/library">
              <VideoLibrary />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
