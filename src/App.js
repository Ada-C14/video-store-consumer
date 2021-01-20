import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';

const API_URL_BASE = 'http://localhost:3001/videos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hollywood Video</h1>
        </header>
      <AddMovieForm />
      </div>
    );  
  }
}

export default App;
