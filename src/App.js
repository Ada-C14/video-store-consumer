import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './components/Library.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Library />
      </div>
    );
  }
}

export default App;
