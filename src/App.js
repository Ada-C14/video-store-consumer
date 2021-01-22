import React, { useState } from 'react';
import axios from 'axios'

import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Customers from './components/Customers';
import Library from './components/Library';
import Search from './components/Search';
import Home from './components/Home';

const baseURL = 'http://localhost:3000'

function AppRouter() {

  const [selectCustomer, setSelectCustomer] = useState(undefined);
  const [selectVideo, setSelectVideo] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSucessMessage] = useState(null);


  const rentalButton = () => {
    if (!(selectVideo.id === null) && !(selectCustomer.id) === null) {
      return true;
    };

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 10);

    axios.post(`${baseURL}/rentals/${selectVideo.title}/check-out`,
      // eslint-disable-next-line camelcase
      { customer_id: selectCustomer.id, due_date: dueDate.toISOString() })
      .then(response => {
        setSucessMessage(`Video checked out! Return date: ${dueDate}`)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage('Failed to check out');
      });
  };

  return (
    <Router>
      <div>
        <header className="app-header">
          <div className='app-header__nav'>
            <h1>AM Video Store</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/customers">Customers</Link></li>
            </ul>
            <div className='app-header__selections'>
              <h2>Rental Selections</h2>
              {selectCustomer && <div className='selected-item'>Selected Customer: {selectCustomer.name}</div>}
              {selectVideo && <div className='selected-item'>Selected Video: {selectVideo.title}</div>}
              <button onClick={rentalButton}>Checkout</button>
              {successMessage ?
                <div>
                  <h3 className="validation-errors-display">{successMessage}</h3>
                </div> : ''}
              {errorMessage ?
                <div>
                  <h3 className="validation-errors-display">{errorMessage}</h3>
                </div> : ''}
            </div>
          </div>
        </header>

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
      <main></main>
      <footer className='app-footer'>
        <p> &copy; A & M Video Store - 2021</p>
      </footer>

    </Router>
  );
}


export default AppRouter;