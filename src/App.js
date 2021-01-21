import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import VideoLibrary from './components/VideoLibrary';
import SelectedVideo from './components/SelectedVideo';
import Search from './components/Search'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleChange = ((selectedData) => {
      setSelectedVideo(selectedData.value)
  })

    return (

      <Router>

      <SelectedVideo video={selectedVideo}/>

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
              <Link to="/customers" exact={true}>Customers</Link>
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
            <Search />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/library">
            <VideoLibrary onSelectVideo={handleChange} selectedVideo={selectedVideo}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );


          }

export default App;
