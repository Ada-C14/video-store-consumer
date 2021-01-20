import React, { Component,useState, useEffect } from 'react';
import axios from 'axios';
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

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {
  
    const [customerList, setCustomerList] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
  
  
    useEffect(() => {
      axios.get(`${API_URL_BASE}/customers`)
        .then((response) => {
          const apiCustomerList = response.data;
          setCustomerList(apiCustomerList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    const selectedCustomer = (id) => {
      const customer = customerList.find((customer) => {
        return customer.id === id;
      });
      setCurrentCustomer(customer);
    };
  
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
            <li>
            {currentCustomer ? `Customer Selected: ${currentCustomer.name}` : ''}
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
            <CustomerList customers={customerList} selectCustomerCallback={selectedCustomer} currentCustomer={currentCustomer}/>
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  
}

export default App;