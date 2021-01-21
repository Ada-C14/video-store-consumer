import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import { Switch } from 'react-router';
import Videos from './components/Videos';
import DisplayVideoDetail from './components/DisplayVideoDetail';
import Customers from './components/CustomerList';
import DisplayCustomerDetail from './components/DisplayCustomerDetail';
import Search from './components/Search';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Return from './components/Return';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const setSelectedVideoCallBack = (video) => {
    setSelectedVideo(video);
  };

  const setSelectedCustomerCallBack = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="https://fontmeme.com/permalink/210121/d12905ae2e494bd311c87be209dcc73f.png" alt="kim-sophia-netflix-font" border="0"></img>     
       <h3>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">Videos</Link>
          </li>
        </ul>
        
        <ul>
        <li className="nav-item">
            <Link className="nav-link" to="/checkout">Check-Out</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/return">Return</Link>
        </li>
        </ul>
        </h3>
      </nav>

      <div className="CheckoutReturn">
           { selectedVideo && <Checkout video={ selectedVideo.title } customer={ selectedCustomer } /> }
           { selectedVideo && <Return video={ selectedVideo.title } customer={ selectedCustomer } /> }
           {/* { selectedVideo && <button className="MainButton" onClick = {this.onClearSelection.bind(this)}>Clear Video/Customer</button> } */}
           {/* { selectedVideo && <p className = "ShowSelected">  <Videos />  Video: {selectedVideo.title}</p> }
           { selectedCustomer && <p className = "ShowSelected"> <Customers/> Customer: {selectedCustomer.name}</p> } */}
      </div>

      <Switch>
        <Route path="/videos">
          <Videos setSelectedVideoCallBack={ setSelectedVideoCallBack } />
        </Route>
        <Route path="/customers">
          <Customers setSelectedCustomerCallBack={ setSelectedCustomerCallBack } />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>



      {
        (selectedCustomer || selectedVideo) &&
        <div className="container pt-4">
          <div className="row">
            <div className="col">
              {
                selectedCustomer &&
                <DisplayCustomerDetail customer={ selectedCustomer } />
              }
            </div>
            <div className="col">
              {
                selectedVideo &&
                <DisplayVideoDetail video={ selectedVideo } />
              }
            </div>
          </div>
        </div>
      }
    </Router>
  );
};

export default App;
