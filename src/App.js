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

const API_URL_BASE = 'http://localhost:3000/'

const App = () => {
  
    const [customerList, setCustomerList] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
  
    useEffect(() => {
      axios.get(`${API_URL_BASE}customers`)
        .then((response) => {
          const apiCustomerList = response.data;
          setCustomerList(apiCustomerList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }, []);

    useEffect(() => {
      axios.get(`${API_URL_BASE}videos`)
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
      setSelectedVideo(video);
    };

    const searchVideo = (video) => {
      axios.get(`${API_URL_BASE}videos?query=${video}`)
      .then((response) => {
        const results = response.data;
        setSearchResult(results);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }

    const addVideo = (video) => {
      axios.post(API_URL_BASE+'videos', video)
      .then( response => {
        const newVideoList = [...videoList, response.data]
        console.log(newVideoList)

        setVideoList(newVideoList)
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      })
    };
  
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
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/search'>
              <Search searchVideoCallback={searchVideo} searchResult={searchResult} addVideoCallback={addVideo}/>
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
        </main>
      </div>
    </Router>
    );
  
}

export default App;