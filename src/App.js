import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import VideoList from './components/VideoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/">
          <VideoList />
          <h1>Hello World!</h1>
        </Route>
      </div>
    );
  }
}

export default App;
