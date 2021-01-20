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

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
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
        </Switch>
      </Router>
    );
  }
}

export default App;
