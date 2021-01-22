import React, {useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import VideoCollection from './components/VideoCollection';
import CustomerCollection from './components/CustomerCollection';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL_BASE = 'http://localhost:3000/';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState('none');
  const [selectedCustomer, setSelectedCustomer] = useState({
    id: null,
    name: 'none',
  });
  const [checkoutMessage, setcheckoutMessage] = useState(null);


  const selectVideo = (title) => {
    setcheckoutMessage('');
    setSelectedVideo(title);
  };

  const selectCustomer = (id, name) => {
    setcheckoutMessage('');
    setSelectedCustomer({
      id: id,
      name: name,
    })
  };

  const checkOut = () => {
    const today = new Date();
    today.setDate(today.getDate() + 7);

    if (selectedCustomer === null || selectedVideo === null) {
      setcheckoutMessage('Need to select a customer and video')
      return null
    }

    axios.post(API_URL_BASE + 'rentals/' + selectedVideo + '/check-out?customer_id=' + selectedCustomer.id + '&due_date=' + today.toString())
    .then((response) => {
      console.log(response);
      setcheckoutMessage(`Checked out ${selectedVideo} successfully to ${selectedCustomer.name}!`);
      setSelectedVideo(null);
      setSelectedCustomer({
        id: null,
        name: 'none',
      });
    })
    .catch((error) => {
      console.log(error);
      setcheckoutMessage(error.message);
    });
  };

  const checkoutMessageNav = () => {
    if (checkoutMessage) {
      return (<span>{checkoutMessage}</span>);
    } else {
      return (
      <div>
        <span>Selected Video: {selectedVideo}</span>
        <span>Selected Customer: {selectedCustomer.name}</span>
      </div>)
    }
  };

    return (

      <Router>
      <div className="App">
        <Navbar fixed='top' bg="dark" variant="dark">
          <Nav className="mr-auto">
          <Nav.Link as={Link}to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/library'>Library</Nav.Link>
            <Nav.Link as={Link} to='/customers'>Customers</Nav.Link>
            <Nav.Link as={Link} to='/search'>Search</Nav.Link>
          </Nav>
          {/* <Navbar.Header>Hello</Navbar.Header> */}
          {checkoutMessageNav()}
          <Button variant="outline-info" onClick={checkOut}>Check Out</Button>
        </Navbar>
            
        <Switch>
          <Route path="/library">
            <VideoCollection onSelectVideo={selectVideo} showButton='select'/>
          </Route>
          <Route path="/customers">
            <CustomerCollection onSelectCustomer={selectCustomer}/>
          </Route>
          <Route path="/search">
            <AddMovieForm showButton='add'/> 
          </Route>
          <Route path="/">
            <Home />
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

export default App;
