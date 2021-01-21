import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import {Navbar, Nav, Alert} from 'react-bootstrap'
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

console.log(errorMessage)


  const addVideo = (video) => {
    axios.post(BASE_URL+'videos', video)
      .then( response => {
        const newVideoList = [...videoLibrary, response.data]
        setVideoLibrary(newVideoList)
        setErrorMessage(null)
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      })
    };

    const setCustomer = (id, name) => {
      if (selectedCustomer && id === selectedCustomer.id) {
        setSelectedCustomer(null)
      } else {
        setSelectedCustomer({name: name})
      }
    };

    const setVideo = (title) => {
      if (selectedVideo && title === selectedVideo) {
        setSelectedVideo(null)
      } else {
        setSelectedVideo(title)
      }
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
              </ul>
          </nav>
          
          { errorMessage ? <Alert variant='danger' onMouseMove={()=> {setErrorMessage(null)}}>{parseErrorMessages(errorMessage)}</Alert> : null}

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
