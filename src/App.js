import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import VideoList from './components/VideoList';
// import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route } from 'react-router-dom';

const API_URL_BASE = 'http://localhost:3000/videos';

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL_BASE)
      .then((response) => {
        const apiVideoList = response.data;
        console.log(apiVideoList);
        setVideoList(apiVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Switch>
        <Route
          path="/videos"
          render={(props) => <VideoList {...props} videos={videoList} />}
        />
      </Switch>
    </div>
  );
};

export default App;
