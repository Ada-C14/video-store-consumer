import React, {Component, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Customers from './Components/Customers'
import Library from './Components/Library'
import Search from './Components/Search'
import Home from './Components/Home'

export default function App() {
  // BASE URL FOR API
  const BASE_URL = 'http://localhost:3000/'

  // state for selected video
  const [currentVideo, setVideo] = useState({id: NaN, title: '', imgUrl: 'favicon.ico'});
  const getCurrentVideo = (curId, curTitle, curImg) => {
    setVideo({id: curId, title: curTitle, imgUrl: curImg});
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Video Library</Link>
            </li>
            <li>
              <Link to="/customers">Customer List</Link>
            </li>
          </ul>
          <section> 
            <article>
            </article>
            <article>
            <h1>current video</h1>
            <h2>{currentVideo.title ? currentVideo.title : 'none selected'}</h2> 
            <img src = {currentVideo.imgUrl} alt = {`Poster for ${currentVideo.title}`}/>         
            </article>
          </section>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/library">
            <Library url = {BASE_URL} curVid = {getCurrentVideo}/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

