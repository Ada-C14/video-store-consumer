import React from 'react';
import VideoLibrary from './VideoLibrary'
import CustomerList from './CustomerList';
import SearchResultList from './SearchResultList';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Store = () => {

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
    )
}

export default Store;