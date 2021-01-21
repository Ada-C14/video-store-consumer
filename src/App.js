/* eslint-disable camelcase */
import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import {Navbar, Nav, Alert, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search'
import CustomerList from './components/CustomerList'
import VideoLibrary from './components/VideoLibrary/VideoLibrary'



const App = () => {
  const BASE_URL = 'http://localhost:3000/'

  const [errorMessage, setErrorMessage] = useState(null)
  const [videoLibrary, setVideoLibrary] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [rentalMessage, setRentalMessage] = useState(null)

  const addVideo = (video) => {
    axios.post(BASE_URL+'videos', video)
      .then( response => {
        const newVideoList = [...videoLibrary, response.data]
        setVideoLibrary(newVideoList)
        setTimeout(() => setErrorMessage(null), 6000);
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
        setTimeout(() => setErrorMessage(null), 6000);
      })
    };

    const setCustomer = (id, name) => {
      if (selectedCustomer && id === selectedCustomer.id) {
        setSelectedCustomer(null)
      } else {
        setSelectedCustomer({id: id, name: name})
      }
    };

    const setVideo = (title) => {
      if (selectedVideo && title === selectedVideo) {
        setSelectedVideo(null)
      } else {
        setSelectedVideo(title)
      }
    }


    const rentVideo = () => {
      axios.post(`${BASE_URL}rentals/${selectedVideo}/check-out`, {customer_id: selectedCustomer.id})
        .then(() => {
          setRentalMessage(`Rental successfully created`);
          setTimeout(() => setRentalMessage(''), 6000);
          setSelectedCustomer(null);
          setSelectedVideo(null);
        })
        .catch((error) => {
          setRentalMessage(error.message);
          setTimeout(() => setRentalMessage(''), 6000)
        })
    }
    
    const parseErrorMessages = (errors) => {
      return (
        <ul>
          {
            Object.entries(errors).map(([key, value]) => (
              <li>{value}</li>
            )) 
          }
        </ul>
      );
    }
    
    return (
      
      <Router>
        <div className='App'>
          <header className='App-header'>
          
          </header>
          
          <nav>
              <ul className='nav-links'>
                <li>
                  <NavLink exact activeClassName='current' to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName='current' to='/library'>Video List</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName='current'to='/customers'>Customer List</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName='current' to='/search'>Search The Movie DB</NavLink>
                </li>
                {selectedCustomer ? <li className='selected'>Customer: {selectedCustomer.name}</li> : ''}
                {selectedVideo ? <li className='selected'>Video: {selectedVideo}</li> : ''}
                {selectedCustomer && selectedVideo ? <li><Button variant="secondary" size="sm" onClick={() => {rentVideo()}}>Create Rental</Button></li> : ''}
              </ul>
          </nav>
          

          { rentalMessage ? <Alert variant='success'> {rentalMessage} </Alert> : null}
          { errorMessage ? <Alert variant='danger'>{parseErrorMessages(errorMessage)}</Alert> : null}

          <Switch>
              <Route path='/search'>
                <Search setErrorMessage={setErrorMessage} addVideoCallback={addVideo} baseUrl={BASE_URL}/>
              </Route>
              <Route path='/customers'>
                <CustomerList setCustomer={setCustomer} />
              </Route>
              <Route path='/library'>
                <VideoLibrary baseUrl={BASE_URL} videoLibrary={videoLibrary} setVideoLibraryCallback={setVideoLibrary} setVideo={setVideo} setErrorMessage={setErrorMessage}/>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }



export default App;
