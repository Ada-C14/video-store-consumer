import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

import Library from './components/Library'
import Customers from './components/Customers'
import './App.css';

const App = () => {
  const [selectedCustomerID, setSelectedCustomerID] = useState(null);
  // TODO: fix/set CustomName so that it can be printed in top, ID for use in checkout only 
  const [selectedCustomerName, setSelectedCustomerName] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const localAPI = 'http://localhost:3000'

  const selectCustomerName = (name) => {
    setSelectedCustomerName(name);
  };

  const selectCustomerID = (cust) => {
    setSelectedCustomerID(cust);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const checkOutVideo = () => {
    // TODO: update for date to be saved in state and updated to  7 days from today when this func is called
    const date = 'Jan 31, 2021'

    if (selectedCustomerID !== null && selectedVideo !== null) {
      axios.post(`${localAPI}/rentals/${selectedVideo}/check-out?customer_id=${selectedCustomerID}&due_date=${date}`)
      .then((response) => {
        console.log(response)
        console.log(`Movie titled ${selectedVideo} checked out to Customer ID: ${selectedCustomerID}`)
        setErrorMessage(`Movie titled ${selectedVideo} checked out to Customer ID: ${selectedCustomerID}`)
      })
      .catch((error) => {
        setErrorMessage(`Unable to checkout movie titled ${selectedVideo} to Customer ID: ${selectedCustomerID}`);
        console.log(`Unable to checkout movie titled ${selectedVideo} to Customer ID: ${selectedCustomerID}`)
      });
    } else {
      setErrorMessage('Please select and video and customer to check out')
    }

  };
  
  const checkOutVideoBtn = () => {
    return (
      <button onClick={ checkOutVideo } >Check Out</button>
    )
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
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
          <span>
            Selected Video: { selectedVideo } 
            Selected Customer:  { selectedCustomerName }
            Selected Cust ID: {selectedCustomerID}
            { selectedVideo !== null && selectedCustomerID !== null ? checkOutVideoBtn() : null }
            {/* <button onClick={ checkOutVideo } >Check Out</button> */}
          </span>
          <div>
            { errorMessage }
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <Library url={localAPI} setSelectedVideoCallback={selectVideo} />
          </Route>
          <Route path="/customers">
            <Customers url={localAPI} setCustomerIDCallback={selectCustomerID} setCustomerNameCallback={selectCustomerName} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
