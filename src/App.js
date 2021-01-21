import React, {Component, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Customers from './Components/Customers'
import Library from './Components/Library'
import Search from './Components/Search'
import Home from './Components/Home'
import './App.css'
import axios from 'axios';

export default function App() {
  // BASE URL FOR API
  const BASE_URL = 'http://localhost:3000/'

  // error state
  const [errorMessage, setErrorMessage] = useState('');
  // errors 
  const allErrors = (errorData) => {
      const errors = [];
      
      console.log(errorData)
      for(const error of errorData) {
      errors.push(<li>{error}</li>);
      }
  
      return errors;
  }

  // state for selected video
  const [currentVideo, setVideo] = useState({id: NaN, title: '', imgUrl: 'favicon.ico'});
  const getCurrentVideo = (curId, curTitle, curImg) => {
    setVideo({id: curId, title: curTitle, imgUrl: curImg});
  }

  // state for selected customer
  const [currentCustomer, setCurrentCustomer] = useState({id: NaN, name: ''})
  const getCurrentCustomer = (custId, custName) => {
    setCurrentCustomer({
      id: custId,
      name: custName
    })
  }

  const onCheckOut = (event) => {
    event.preventDefault();

    console.log('checking out')
    // axios post request goes here

    const dueDate = new Date(new Date().getTime()+(7*24*60*60*1000));

    axios.post(`${BASE_URL}rentals/${currentVideo.title}/check-out`, {
      // eslint-disable-next-line camelcase
      customer_id: currentCustomer.id,
      // eslint-disable-next-line camelcase
      due_date: dueDate
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    setVideo({id: NaN, title: '', imgUrl: 'favicon.ico'})
    setCurrentCustomer({id: NaN, name: ''})

  }

  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Video Library</Link>
            </li>
            <li>
              <Link to="/customers">Customer List</Link>
            </li>
          </ul>
        </nav>
        <section> 
          <article>
            <h1>current customer</h1>
            <h2>{currentCustomer.name ? currentCustomer.name : 'none selected'}</h2> 
          </article>
          <article>
            <h1>current video</h1>
            <h2>{currentVideo.title ? currentVideo.title : 'none selected'}</h2> 
            <img src = {currentVideo.imgUrl} alt = {`Poster for ${currentVideo.title}`}/>         
          </article>
        </section>
        {currentCustomer.name && currentVideo.title ? <button onClick={onCheckOut}>Check-out</button> : null }
        <article className = 'validation-errors-display'>
                <h3>{errorMessage ? 'Errors detected!' : ''}</h3>
                <ul className = 'validation-errors-display__list'>
                    {errorMessage ? allErrors(errorMessage) : ''}
                </ul>
        </article> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers url = {BASE_URL} curCustomer = {getCurrentCustomer} />
          </Route>
          <Route path="/library">
            <Library url = {BASE_URL} curVid = {getCurrentVideo} setError = {setErrorMessage}/>
          </Route>
          <Route path="/search">
            <Search setError = {setErrorMessage}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

