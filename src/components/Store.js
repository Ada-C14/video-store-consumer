import React, { useState } from 'react';
import VideoLibrary from './VideoLibrary'
import CustomerList from './CustomerList';
import SearchResultList from './SearchResultList';
import Rental from './Rental';

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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to='/customers'>Customers</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
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