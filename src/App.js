import React, { useState } from 'react';
// import './App/css';
import Nav from './components/Nav';
import Selected from './components/Selected';
import Search from './components/Search';
import axios from 'axios';

import Library from './components/Library';

import Home from './components/Home';
import Customers from './components/Customers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {

  
  const [currentCustomer, setCurrentCustomer] = useState(null) 
  const [selectedVideo, setSelectedVideo]= useState(null);


  // useEffect(() => {
  //   axios.get(`${API_URL_BASE}customers`)
  //   .then((response) => {
  //     const apiCustomerList = response.data;
  //     setCustomerList(apiCustomerList);
  //   })
  //   .catch((error) => {
  //     setErrorMessage(error.message);
  //   });
  // }, []); 

  const selectCustomer = (customer) => {
    if (currentCustomer && customer.id === currentCustomer.id) {
      setCurrentCustomer(null)
    } else {
      setCurrentCustomer(customer);
    }
  }
  const selectVideo = (video) => {
    if (selectedVideo && video.id === selectedVideo.id) {
      setSelectedVideo(null);
    } else {
      setSelectedVideo(video);
    }
  }

  const checkoutVideo = () => {

    const date = new Date ();
    date.setDate(date.getDate() + 7);
    
    axios.post(API_URL_BASE + 'rentals/' + selectedVideo + '/check-out?customer_id=' + currentCustomer.id + '&due_date=' + date)

    .then((response) => {
      console.log(response)
      alert(`Successfully checked out ${selectedVideo.title}`)
    })
    .catch((error) => {
      alert(`Sorry, we were unable to check out ${selectedVideo.title}`)
      setErrorMessage(error.message);
    });
    setSelectedVideo(null)
    setCurrentCustomer(null)
  }

// add a callback function that reset the states to null
    return (
      <Router>
        <div className="App">
          <Nav />
          <Selected video={selectedVideo} customer={currentCustomer}/>
          <button className="checkout-button" onClick= {checkoutVideo}><strong>Checkout</strong></button>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library">
              <Library 
              onSelectVideo={selectVideo}/>
            </Route>
            <Route path="/customers">
              <Customers
              selectCustomerCallback={selectCustomer}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
