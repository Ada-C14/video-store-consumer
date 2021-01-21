import React, { Component, useState, useEffect } from 'react';
// import './App/css';
import Nav from './components/Nav';
import Selected from './components/Selected';
import Search from './components/Search';
import axios from 'axios';

import Library from './components/Library';

import Home from './components/Home';
import Customers from './components/Customers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {

  
  const [currentCustomer, setCurrentCustomer] = useState(null) 
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo,setSelectedVideo]= useState(null);
  const [errorMessage,setErrorMessage] = useState(null);

  // useEffect(() => {
  //   axios.get(`${API_URL_BASE}customers`)
  //   .then((response) => {
  //     const apiCustomerList = response.data;
  //     setCustomerList(apiCustomerList);
  //   })
  //   .catch((error) => {
  //     setErrorMessage(error.message);
  //   });
  // }, []); 

  const selectCustomer = (customer) => {
    console.log(customer)
    if (currentCustomer && customer.id === currentCustomer.id) {
      setCurrentCustomer(null)
    } else {
      setCurrentCustomer(customer);
    }
  }

    return (
      <Router>
        <div className="App">
          <p>{currentCustomer.name}</p>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers">
              <Customers
              selectCustomerCallback={selectCustomer}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
