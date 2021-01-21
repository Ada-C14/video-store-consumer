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
import CheckIn from './components/CheckIn';


// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);

  const chooseVideo = (videoData) => {
    setSelectedVideo(videoData)
  }

  const chooseCustomer = (id) => {
    setSelectedCustomer(id.id)
  }

  const checkOut = (rental) => {
    console.log(rental.dueDate)
    axios.post(`${BASE_URL}rentals/${rental.video.title}/check-out?customer_id=${rental.customer}&due_date=${rental.dueDate}`, rental)
    .then((response) => {
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });

    setSelectedVideo(null)
    setSelectedCustomer(null)
  }

  const checkIn = (rental) => {
    axios.post(`${BASE_URL}rentals/${rental.video.title}/return?customer_id=${rental.customer}&returned=true`, rental)
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
          <CheckOut video={selectedVideo}
                    customer={selectedCustomer}
                    checkOutCallback={checkOut} />
        </div>
        <div>
          <CheckIn video={selectedVideo}
                    customer={selectedCustomer}
                    checkInCallback={checkIn} />
        </div>

        <div>
          <p>{ selectedVideo ? `Selected Video - ${selectedVideo.title }` : 'No video selected'}</p>
          <p>{ selectedCustomer ? `Selected Customer - ${selectedCustomer }` : 'No customer selected'}</p>
        </div>

        <Switch>
          <Route path="/search" component={Search}>
            <Search url={BASE_URL}
                    focus='videos'/>
          </Route>
          <Route path="/library" component={Library}>
            <Library url={BASE_URL}
                       focus='videos/'
                       selectVideoCallback={chooseVideo}
                       selectedVideo={selectedVideo}/>
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