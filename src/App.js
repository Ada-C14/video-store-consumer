import React, { Component } from 'react';
<<<<<<< HEAD
import VideoLibrary from './components/VideoLibrary'
=======
>>>>>>> b1a5e442e0fbf032526eaff5696e9d75ef06fbd8
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
<<<<<<< HEAD
// import child components: search, customerlist, videolibrary
=======
import CustomerList from './components/CustomerList';

// import child components: search, videolibrary
>>>>>>> b1a5e442e0fbf032526eaff5696e9d75ef06fbd8

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
