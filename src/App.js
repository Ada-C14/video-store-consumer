import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import { Switch } from 'react-router';
import VideoList from './components/VideoList';
import CustomerList from './components/CustomerList';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/videos">Videos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/videos">
            <VideoList />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
