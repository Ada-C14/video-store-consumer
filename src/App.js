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
        <a className="navbar-brand" href="#">Kim & Sophia's Video Store</a>
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
      </nav>

      <div className="CheckoutReturn">
            <Checkout video = {selectedVideo.title} customer = {selectedCustomer} setDisplayMessage={this.setDisplayMessage.bind(this)} />
            <Return video = {selectedVideo.title} customer = {selectedCustomer} setDisplayMessage={this.setDisplayMessage.bind(this)}/>
            <button className="MainButton" onClick = {this.onClearSelection.bind(this)}>Clear Video/Customer</button>
            <p className = "ShowSelected">  <Videos />  Video: {selectedVideo.title}</p>
            <p className = "ShowSelected"> <Customers/> Customer: {selectedCustomer.name}</p>
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
        <div class="container pt-4">
          <div class="row">
            <div class="col">
              {
                selectedCustomer &&
                <DisplayCustomerDetail customer={ selectedCustomer } />
              }
            </div>
            <div class="col">
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
