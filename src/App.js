import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import Customers from './components/Customers';
import axios from 'axios';

import './App.css';

const App = () => {
  const API_BASE_URL = 'http://localhost:3000';

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE_URL}/videos`)
      .then((response) => {
          const apiVideoList = response.data
          setVideoList(apiVideoList);
      })
      .catch((error) => {
          setErrorMessage(error.message);
      });
    }, []);

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const addVideo = (videoObj) => {
    axios.post(`${API_BASE_URL}/videos`, videoObj)
      .then((response) => {
        setVideoList([...videoList, videoObj]);
        setErrorMessage('Video has been added to the library')
      })
      .catch((error) => {
        setErrorMessage('Video is already in the library');
      });
  };

  return (
    <Router>
      <div>
        <header className="App-header">
          <h1 className="storename">Video Store</h1>
          <nav className="nav"> 
            <ul>
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
            </ul>
          </nav>
          {selectedCustomer ? <h6>Selected Customer: {selectedCustomer.name}</h6> : ''}
          {selectedVideo ? <h6>Selected Video: {selectedVideo.title}</h6> : ''}
        </header>
        <Switch>
          <Route path='/search'>
            <VideoSearch url={API_BASE_URL} addVideoCallback={addVideo} />
          </Route>
          <Route path='/library'>
            <VideoLibrary url={API_BASE_URL} onClickCallback={selectVideo} videos={videoList} errorMessage={errorMessage} />
          </Route>
          <Route path="/customers">
            <Customers url={API_BASE_URL} onClickCallback={selectCustomer} />
          </Route>
          <Route path="/">
            Welcome
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
