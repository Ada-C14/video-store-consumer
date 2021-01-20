import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';

const App = () => {
    // video state
    // customers state
    return (
      <div className="App">
        <Navigation />
        {/* Checkout component exist when video and customer state have values */}
        {/* <Checkout />  */}
        <Main />
      </div>
    );
}

export default App;
