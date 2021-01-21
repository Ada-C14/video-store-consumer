import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import Search from './components/Search';
import Customers from './components/Customers';

const BASE_URL = 'http://localhost:3000/';

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
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers url={BASE_URL} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library url={BASE_URL} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
