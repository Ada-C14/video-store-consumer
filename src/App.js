import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import VideoCollection from './components/VideoCollection';
import CustomerCollection from './components/CustomerCollection';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hollywood Video</h1>
        </header> */}
        <Navbar className='navbar' bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/videos'>Videos</Nav.Link>
            <Nav.Link href='/customers'>Customers</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      


        { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
        <p>Currently Selected Video: {selectedVideo}</p>
        <p>Currently Selected Customer: {selectedCustomer.name}</p>
        <Button variant="outline-info" onClick={checkOut}>Check Out</Button>
        

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
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}

// function Customer() {
//   return <h2>Customers</h2>;
// }

export default App;
