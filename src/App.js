import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Search from './components/Search/Search'
import CustomerList from './components/CustomerList'

const App = () => {
  const BASE_URL = 'http://localhost:3000/'

  const [errorMessage, setErrorMessage] = useState({})
  const [videoLibrary, setVideoLibrary] = useState([])
  
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
    
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>

          </header>
          
          <nav>
              <ul>
                <li>
                  <Link to='/customers'>Customer List</Link>
                </li>
                <li>
                  <Link to='/search'>Search The Movie DB</Link>
                </li>
              </ul>
          </nav>
          
          { errorMessage ? parseErrorMessages(errorMessage) : null}

          
          <Route path='/search'>
            <Search setErrorMessage={setErrorMessage} addVideoCallback={addVideo} baseUrl={BASE_URL}/>
          </Route>
      
          <Switch>
              <Route path='/customers'>
                <Customers />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  
};

const Customers = () => {
  return(
    <div>
      <h2>Customers</h2>
      < CustomerList />
    </div>
  ) 
};

export default App;
