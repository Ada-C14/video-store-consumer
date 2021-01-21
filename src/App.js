import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import VideoCollection from './components/VideoCollection';
import CustomerCollection from './components/CustomerCollection';

const API_URL_BASE = 'http://localhost:3000/';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState({
    id: null,
    name: 'none',
  });
  const [errorMessage, setErrorMessage] = useState(null);


  const selectVideo = (title) => {
    setSelectedVideo(title);
  };

  const selectCustomer = (id, name) => {
    setSelectedCustomer({
      id: id,
      name: name,
    })
  };

  const checkOut = () => {
    const today = new Date();
    today.setDate(today.getDate() + 7);

    if (selectedCustomer === null || selectedVideo === null) {
      setErrorMessage('Need to select a customer and video')
      return null
    }
    console.log(selectedCustomer)

    axios.post(API_URL_BASE + 'rentals/' + selectedVideo + '/check-out?customer_id=' + selectedCustomer.id + '&due_date=' + today.toString())
    .then((response) => {
      console.log(response);
      setErrorMessage('Checked out video successfully!')
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage(error.message);
    });
  };

    return (

      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hollywood Video</h1>
        </header>
        { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
        <p>Currently Selected Video: {selectedVideo}</p>
        <p>Currently Selected Customer: {selectedCustomer.name}</p>
        <button onClick={checkOut}>Check Out</button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/add">Add a Video</Link>
            </li>
          </ul>
        </nav>

        <AddMovieForm />
        <Switch>
          <Route path="/videos">
            <VideoCollection onSelectVideo={selectVideo}/>
          </Route>
          <Route path="/customers">
            <CustomerCollection onSelectCustomer={selectCustomer}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/add">
            {/* <AddMovieForm /> */}
          </Route>
        </Switch>
      </div>
    </Router>
    );  
}

function Home() {
  return <h2>Home</h2>;
}

// function Customer() {
//   return <h2>Customers</h2>;
// }

export default App;
