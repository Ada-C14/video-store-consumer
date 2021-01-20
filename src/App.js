import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './components/Homepage'
import Search from './components/Search'
import Library from './components/Library'
import CustomerList from './components/CustomerList'
import './App.css';
import CheckoutReturn from './components/CheckoutReturn';

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {
  
    const [customerList, setCustomerList] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);
  
  
    useEffect(() => {
      axios.get(`${API_URL_BASE}/customers`)
        .then((response) => {
          const apiCustomerList = response.data;
          setCustomerList(apiCustomerList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    useEffect(() => {
      axios.get(`${API_URL_BASE}/videos`)
        .then((response) => {
          const apiVideoList = response.data;
          setVideoList(apiVideoList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    const selectedCustomer = (id) => {
      const customer = customerList.find((customer) => {
        return customer.id === id;
      });
      setCurrentCustomer(customer);
    };
  
    const selectVideo = (id) => {
      const video = videoList.find((video) => {
        return video.id === id;
      });
      setSelectedVideo(video)
    };

    // const checkout = () => {

    // }

    // const return = () => {
      
    // }
    
  
    return (
      <Router>
      <div>
        <nav className='sidenav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/library'>Library</Link>
            </li>
            <li>
              <Link to='/customers'>Customers</Link>
            </li>
            <li>
            {currentCustomer ? `Customer Selected: ${currentCustomer.name}` : ''}
            </li>
          </ul>
        </nav>
        <main>
          {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
          <section className={`selected-container ${currentCustomer || selectedVideo ? '' : 'hide'}`}>
            <CheckoutReturn currentCustomer={currentCustomer} selectedVideo={selectedVideo}/>
          </section>
          <section className={`${currentCustomer || selectedVideo ? 'lower' : ''}`}>
            <Switch>
              <Route path='/search'>
                <Search />
              </Route>
              <Route path='/library'>
                <Library 
                  videos={videoList} 
                  selectedVideo={selectedVideo} 
                  onSelectVideoCallback= {selectVideo}
                />
              </Route>
              <Route path='/customers'>
                <CustomerList customers={customerList} selectCustomerCallback={selectedCustomer} currentCustomer={currentCustomer}/>
              </Route>
              <Route path='/'>
                <Homepage />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
    );
  
}

export default App;