import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Customers from './components/Customers';
import Library from './components/Library';
import Search from './components/Search';
import Home from './components';


function AppRouter() {

  const [selectCustomer, setSelectCustomer] = useState(undefined);
  const [selectVideo, setSelectVideo] = useState(undefined);
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
        </nav>

        {selectCustomer && <div>Selected Customer: {selectCustomer.name}</div>}
        {selectVideo && <div>Selected Video: {selectVideo.name}</div>}

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
          <Library onSelectVideoCallback={setSelectVideo} />
          </Route>
          <Route path="/customers">
            <Customers onSelectCustomerCallback={setSelectCustomer} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default AppRouter;