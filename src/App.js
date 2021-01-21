import React, { Component, useState } from 'react';
// import './App/css';
import Nav from './components/Nav';
import Selected from './components/Selected';
import Search from './components/Search';

import Library from './components/Library';

import Home from './components/Home';
import Customers from './components/Customers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App  = () => {
  // State for selected customer
  
  // State for selected video
  const [selectedVideo, setSelectedVideo] = useState();

  // Function to set selected video, and pass the function as a callback to library
  const selectVideo = (video) => {
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Selected />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/library" component={Library} />
          {/* <Route exact path="/library" render={() => <Library onSelectVideo=/>}/> */}
          <Route path="/customers" component={Customers} />
          {/* <Route exact path="/customers" render={() => <Customers />}/> */}
        </Switch>
      </div>
    </Router>
  );

}

export default App;
