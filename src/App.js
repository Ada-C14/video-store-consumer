import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Search from './components/Search/Search'

const App = () => {
  const BASE_URL = 'http://localhost:3000/'

  const [errorMessage, setErrorMessage] = useState(null)
  const [videoLibrary, setVideoLibrary] = useState([])
  
  const addVideo = (video) => {
    axios.post(BASE_URL+'videos', video)
      .then( response => {
        const newVideoList = [...videoLibrary, response.data]
        setVideoLibrary(newVideoList)
        setErrorMessage('')
      })
      .catch( error => {
        setErrorMessage(error.message)
      })
  }


    return (
      <Router>
        <div className='App'>
          <header className='App-header'>

          </header>
          
          <nav>
            <Link to='/search'>Search The Movie DB</Link>
          </nav>
          
          { errorMessage ? errorMessage : null}

          
          <Route path='/search'>
            <Search setErrorMessage={setErrorMessage} addVideoCallback={addVideo} baseUrl={BASE_URL}/>
          </Route>
        </div>
      </Router>
    );
  
}

export default App;
