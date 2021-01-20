import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CustomerList from './components/CustomerList';

// import child components: search, videolibrary

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li> */}
              <li>
                <Link to='/customers'>Customers</Link>
              </li>
              {/* <li>
                <Link to="/library">Library</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            {/* <Route path="/search">
              <Search />
            </Route> */}
            <Route path="/customers">
              <CustomerList />
            </Route>
            {/* <Route path="/library">
              <VideoLibrary />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
