import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Library from './components/Library'
import Customers from './components/Customers'
import Search from './components/Search'
import './App.css';

const App = () => {
  // const localAPI = 'http://localhost:3000/'
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const selectCustomer = (cust) => {
    setSelectedCustomer(cust);
  };

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <span>
          Selected Video: 
          Selected Customer:  { selectedCustomer !== null ? selectedCustomer : null }
        </span>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/customers">
          <Customers url='http://localhost:3000' setCustomerCallback={selectCustomer} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
