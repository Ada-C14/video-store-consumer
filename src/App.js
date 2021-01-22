import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import Customers from './components/Customers';
import RentalForm from './components/RentalForm';

import './App.css';

const App = () => {
  const API_BASE_URL = 'http://localhost:3000';

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Router>
      <div>
        <header className="App-header">
          <h1 className="storename">Video Store</h1>
          <nav> 
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Video Search</Link>
              </li>
              <li>
                <Link to="/library">Video Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
          <ul className="selected">
            {selectedCustomer ? <li>Selected Customer: {selectedCustomer.name}</li> : ''}
            {selectedVideo ? <li>Selected Video: {selectedVideo.title}</li> : ''}
          </ul>
        </header>
        <body>
        <Switch>
          <Route path='/search'>
            <VideoSearch url={API_BASE_URL} />
          </Route>
          <Route path='/library'>
            <VideoLibrary url={API_BASE_URL} onClickCallback={selectVideo} />
          </Route>
          <Route path="/customers">
            <Customers url={API_BASE_URL} onClickCallback={selectCustomer} />
          </Route>
          <Route path="/checkout">
            <RentalForm url={API_BASE_URL} selectedCustomer={selectedCustomer} selectedVideo={selectedVideo} />
          </Route>
          <Route path="/">
            Welcome
          </Route>
        </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
