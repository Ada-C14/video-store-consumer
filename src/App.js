import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import CustomerList from './components/CustomerList';
import VideoLibrary from './components/VideoLibrary';
import SelectedVideo from './components/SelectedVideo';
import Search from './components/Search'
import SelectedCustomer from './components/SelectedCustomer';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')


  const handleVideoChange = ((selectedData) => {

      setSelectedVideo(selectedData.value)
  })

  const handleCustomerChange = ((selectedData) => {
      setSelectedCustomer(selectedData.value)
  })

  const resetState = () => {
    setSelectedVideo(null);
    setSelectedCustomer(null);
  };

  const addRental = () => {
    axios
      .post(`http://localhost:3000/rentals/${selectedVideo.title}/check-out`, {
        customerId: selectedCustomer.id,
        dueDate: new Date(
          Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 7
        ),
      })
      .then(() => {
        resetState();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  
    return (

      <Router>

      <SelectedVideo video={selectedVideo}/>
      <SelectedCustomer customer={selectedCustomer}/>

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
              <Link to="/customers" exact={'true'}>Customers</Link>
            </li>
            <li>
              <Link to="/library" exact={true}>Video Library</Link>
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
          <Route exact path="/customers">
  
            <CustomerList onSelectCustomer={handleCustomerChange} selectedCustomer={selectedCustomer}/>
          </Route>
          <Route exact  path="/library">
            <VideoLibrary selectedCustomer={selectedCustomer}  onSelectVideo={handleVideoChange} selectedVideo={selectedVideo}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );


          }

export default App;
