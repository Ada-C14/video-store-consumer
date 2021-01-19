import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './components/Homepage'
import Search from './components/Search'
import Library from './components/Library'
import CustomerList from './components/CustomerList'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/library'>Library</Link>
            </li>
            <li>
              <Link to='/customers'>Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/library'>
            <Library />
          </Route>
          <Route path='/customers'>
            <CustomerList />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;