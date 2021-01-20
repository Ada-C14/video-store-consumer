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
              <Link to="/users">Users</Link>
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
        </Switch>
      </Router>
    );
  }
}

export default App;
