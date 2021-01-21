import React, { useState, useEffect } from 'react'
import CustomerList from './components/CustomerList.js';
import MovieLibrary from './components/MovieLibrary.js';
import MovieSearchBar from './components/MovieSearchBar.js';
import MovieSearchResults from './components/MovieSearchResults.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const BASE_API_URL = 'http://localhost:3000';

export default function App() {
  const [customers, setCustomers] = useState(null)

  const selectCustomer = (singleCustomer) => {
    setCustomers(singleCustomer)
  }

  return (
    <Router>
      <div>
        <div className='top-nav'>
          <h2><Link to="/">video store</Link></h2>
          <nav className='main-fns'>
            <ul>
              <li>
                <Link to="/library">movie library <i class="arrow down"></i></Link>
              </li>
              <li>
                <Link to="/customers">customer list <i class="arrow down"></i></Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <MovieLibrary url={BASE_API_URL} />
          </Route>
          <Route path="/customers">
            <CustomerList selectCustomerCallback={selectCustomer}/>
          </Route>
          <Route path='/results' render={props => <MovieSearchResults {...props} />}/>
          <Route path="/">
            { Home() }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className='homepage'>
      <h1>start a rental</h1>
      <br />
      <h1>search for a movie</h1>
      <MovieSearchBar url={BASE_API_URL} />
    </div>
  );
};

