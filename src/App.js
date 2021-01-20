import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';

const API_URL_BASE = 'http://localhost:3001/videos';

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
            <Video />
          </Route>
          <Route path="/customers">
            <Customer />
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

function Video() {
  return <h2>Video</h2>;
}

function Customer() {
  return <h2>Customers</h2>;
}

export default App;
