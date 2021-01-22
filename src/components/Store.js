import React, { useState } from 'react';
import VideoLibrary from './VideoLibrary'
import CustomerList from './CustomerList';
import SearchResultList from './SearchResultList';
<<<<<<< HEAD
import Rental from './Rental';
=======
import './Store.css';
>>>>>>> master

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Store = () => {

    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (selected) => {
        setSelectedVideo(selected);
        return;
    }

    const selectCustomer = (selected) => {
        setSelectedCustomer(selected);
        return;
    }

    return (
        <Router>
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Search</Link>
              </li>
              <li className="nav-item">
                <Link to='/customers' className="nav-link">Customers</Link>
              </li>
              <li className="nav-item">
                <Link to="/library" className="nav-link">Library</Link>
              </li>
              <li>
                <Link to="/library">Rental</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <SearchResultList />
            </Route>
            <Route path="/customers">
              <CustomerList 
                selectCustomerCallback={selectCustomer}
                selectedCustomer={selectedCustomer}
              />
            </Route>
            <Route path="/library">
              <VideoLibrary 
                selectVideoCallback={selectVideo}
                selectedVideo={selectedVideo}
              />
            </Route>
            <Route path="/library">
              <Rental 
                customer={selectedCustomer}
                video={selectedVideo}
              />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    )
}

export default Store;