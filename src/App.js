import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers'
import Videos from './components/Videos'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

export default function App() {
  const BASE_URL = 'http://localhost:3000'
  const VIDEO_URL = `${BASE_URL}/videos`
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // will receive information about which video was selected and set the state
  const onVideoSelected = (video) => {
    setSelectedVideo(video)
  }

  // will receive information about which customer was selected and set the state
  const onCustomerSelected = (customer) => {
    setSelectedCustomer(customer)
  }


  //  post "/rentals/:title/check-out", to: "rentals#check_out", as: "check_out"
  // http://localhost:3000/rentals/North%20by%20Northwest/check-out?customer_id=2&due_date=2021-02-15

  // date formatting link: https://forums.asp.net/t/2005199.aspx?Calculate+next+due+date+using+javascript+or+jquery+
  Date.prototype.addDays = function (interval) {
    this.setDate(this.getDate() + interval);
    return this;
  };

  const Timestamp = () => {
    const today = new Date();
    const dueDate = today.addDays(7);
    const dd = dueDate.getDate();
    const mm = dueDate.getMonth() + 1;
    const yyyy = dueDate.getFullYear();
    const formattedDate = yyyy + '-' + mm + '-' + dd;
    return formattedDate;
  };

  const checkout = () => {
    console.log(Timestamp());
    const CHECKOUT_URL = `${BASE_URL}/rentals/${selectedVideo.title}/check-out?customer_id=${selectedCustomer.id}&due_date=${Timestamp()}`
    axios.post(CHECKOUT_URL)
      .then((response) => {
        // const data = response.data;
        // console.log(data)

        alert(`${selectedVideo.title} has been successfully checked out by ${selectedCustomer.name}.`)
        // to reinitiate the video and customer
        setSelectedCustomer(null)
        setSelectedVideo(null)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <Router>
      <div className="App-header">
        <span className='App-title'>Video to Checkout: { selectedVideo ? selectedVideo.title : 'has not been selected'}{'; '}
        Customer: { selectedCustomer ? selectedCustomer.name: 'has not been selected'}{' '}</span>

        {selectedVideo && selectedCustomer && (
          <button onClick={checkout}>
            Checkout {selectedVideo.title} for {selectedCustomer.name}
          </button>
        )
        }

        <nav className='topnav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers onCustomerSelected={onCustomerSelected} />
          </Route>
          <Route path="/library">
            {/* note that library and videos names don't match*/}
            <Videos videoURL={VIDEO_URL} onVideoSelected={onVideoSelected} />
          </Route>
          <Route path="/search">
            <Search videoURL={VIDEO_URL} />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



