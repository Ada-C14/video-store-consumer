import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMovieForm from './components/AddMovieForm';

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
