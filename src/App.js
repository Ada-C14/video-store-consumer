import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import VideoLibrary from './components/VideoLibrary';
import SelectedVideo from './components/SelectedVideo';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        {/* <VideoLibrary/> */}
        {/* <SelectedVideo video={selectedVideo}/> */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" exact={true}>Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/library" exact={true}>Library</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/search">
            {/* <Search /> */}
          </Route>
          <Route path="/customers">
            {/* <Customers /> */}
          </Route>
          <Route path="/library">
            <VideoLibrary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Search() {
//   return <h2>Search</h2>;
// }

// function Customers() {
//   return <h2>Customers</h2>;
// }

// function Library() {
//   return <h2>Video Library</h2>;

// }



export default App;
