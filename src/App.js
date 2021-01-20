import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Search from './components/Search/Search'
import CustomerList from './components/CustomerList'

const App = () => {
  const BASE_URL = 'http://localhost:3000/'

  const [errorMessage, setErrorMessage] = useState({})
  const [videoLibrary, setVideoLibrary] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  
  const addVideo = (video) => {
    axios.post(BASE_URL+'videos', video)
      .then( response => {
        const newVideoList = [...videoLibrary, response.data]
        setVideoLibrary(newVideoList)
        setErrorMessage('')
      })
      .catch( error => {
        const errors = error.response.data.errors
        setErrorMessage(errors)
      })
<<<<<<< HEAD
    };

    const setCustomer = (id, name) => {
      if (selectedCustomer && id === selectedCustomer.id) {
        setSelectedCustomer(null)
      } else {
        setSelectedCustomer({id: id, name: name})
      }
    };
=======
    }

    const parseErrorMessages = (errors) => {
      return (
        <ul>
          {
            Object.entries(errors).map(([key, value]) => (
              <li>Error: {value}</li>
            )) 
          }
        </ul>
      );
    }
>>>>>>> 19d157c265d473347d7623f2f6a13f73bd64bf8c
    
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
                  <NavLink exact activeClassName='current' to='/videos'>Video List</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName='current'to='/customers'>Customer List</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName='current' to='/search'>Search The Movie DB</NavLink>
                </li>
                {selectedCustomer ? <li className='selected'>Customer: {selectedCustomer.name}</li> : ''}
              </ul>
<<<<<<< HEAD
              
              
          </nav>
          
          { errorMessage ? errorMessage : null}
=======
          </nav>
          
          { errorMessage ? parseErrorMessages(errorMessage) : null}

          
          <Route path='/search'>
            <Search setErrorMessage={setErrorMessage} addVideoCallback={addVideo} baseUrl={BASE_URL}/>
          </Route>
>>>>>>> 19d157c265d473347d7623f2f6a13f73bd64bf8c
      
          <Switch>
              <Route path='/search'>
                <Search setErrorMessage={setErrorMessage} addVideoCallback={addVideo} baseUrl={BASE_URL}/>
              </Route>
              <Route path='/customers'>
                <CustomerList setCustomer={setCustomer} />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  
};



export default App;
