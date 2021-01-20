import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CustomerList from './components/CustomerList'
import logo from './logo.svg';
import './App.css';


const App = () => {
  return(
    <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/customers'>Customer List</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/customers'>
                <Customers />
              </Route>
            </Switch>
          </div>
        </Router>
  )
};

const Customers = () => {
  return(
    <div>
      <h2>Customers</h2>
      < CustomerList />
    </div>
  ) 
};

export default App;
