import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import VideoCollection from './components/VideoCollection';
import CustomerCollection from './components/CustomerCollection';

const API_URL_BASE = 'http://localhost:3000/';

class App extends Component {
  
  render() {

    return (

      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hollywood Video</h1>
        </header>
      <AddMovieForm />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/videos">
            <VideoCollection />
          </Route>
          <Route path="/customers">
            <CustomerCollection />
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

function Home() {
  return <h2>Home</h2>;
}

// function Customer() {
//   return <h2>Customers</h2>;
// }

export default App;
