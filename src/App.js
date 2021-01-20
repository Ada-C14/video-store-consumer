import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
