import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import logo from './logo.svg';
import './App.css';
import CheckOut from './components/CheckOut';


// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/'

const App = () => {
  const [selectVideo, setSelectedVideo] = useState(null)
  const [selectCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);

  const chooseVideo = (props) => {
    setSelectedVideo(props.title)
  }

  const chooseCustomer = (id) => {
    setSelectedCustomer(id.id)
  }

  const checkOut = (rental) => {
    axios.post(`${BASE_URL}rentals`, rental)
    .then((response) => {
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

    setSelectedVideo(null)
    setSelectedCustomer(null)
  }

   return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ting-Yi and Anya's Movie Store!</h1>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Video Search</Link>
          </li>
          <li>
            <Link to="/library">Video Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>

        <div>
          <CheckOut video={selectVideo}
                    customer={selectCustomer}
                    checkOutCallback={checkOut} />
        </div>

        <div>
          <p>Selected Video - {selectVideo}</p>
          <p>Selected Customer - {selectCustomer}</p>
        </div>

        <Switch>
          <Route path="/search" component={Search}>
            <Search url={BASE_URL}
                    focus='videos'/>
          </Route>
          <Route path="/library" component={Library}>
            <Library url={BASE_URL}
                       focus='videos'
                       selectVideoCallback={chooseVideo}/>
          </Route>
          <Route path="/customers" component={Customers}>
            <Customers url={BASE_URL}
                       focus='customers'
                       selectCustomerCallback={chooseCustomer}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

