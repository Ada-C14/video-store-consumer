import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
 } from 'react-bootstrap';

import Library from './components/Library'
import Customers from './components/Customers'
import Search from './components/Search'
import './App.css';

const App = () => {
  const [selectedCustomerID, setSelectedCustomerID] = useState(null);
  const [selectedCustomerName, setSelectedCustomerName] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const localAPI = 'http://localhost:3000'

  const selectCustomerName = (name) => {
    setSelectedCustomerName(name);
  };

  const selectCustomerID = (id) => {
    setSelectedCustomerID(id);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const getDueDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 7)
    return (moment(date).format('MMM D, YYYY'))
  }

  const checkOutVideo = () => {
    const date = getDueDate()
    // setDueDate(toString(date));
    console.log(date)
    // console.log(dueDate)

    axios.post(`${localAPI}/rentals/${selectedVideo}/check-out?customer_id=${selectedCustomerID}&due_date=${date}`)
    .then((response) => {
      console.log(`Movie titled ${selectedVideo} checked out to cusomter: ${selectedCustomerName}`)
      setErrorMessage(`Movie titled ${selectedVideo} checked out to cusomter: ${selectedCustomerName}`)
    })
    .catch((error) => {
      setErrorMessage(`Unable to checkout movie titled ${selectedVideo} to Customer ID: ${selectedCustomerID}`);
      console.log(`Unable to checkout movie titled ${selectedVideo} to Customer ID: ${selectedCustomerID}`)
    });

  };
  
  const checkOutVideoBtn = () => {
    return (
      <button onClick={ checkOutVideo } >Check Out</button>
    )
  }
    
  return (

    <Router>
      <body>
        <header>

          <nav> 
            <ul>
              <li><h1 className="title">Rose Video</h1></li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </header>
       
        <span className="selected" >
          <span>Selected Video: { selectedVideo } </span>
          <span>Selected Customer:  { selectedCustomerName }</span>
          <span>{ selectedVideo !== null && selectedCustomerID !== null ? checkOutVideoBtn() : null }</span>
        </span>
        <div className="selected error-msg">
          { errorMessage }
        </div>
        <main>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/library">
              <Library url={localAPI} setSelectedVideoCallback={selectVideo} />
            </Route>
            <Route path="/customers">
              <Customers url={localAPI} setCustomerIDCallback={selectCustomerID} setCustomerNameCallback={selectCustomerName} />
            </Route>
            <Route path="/search"  >
              <Search url={localAPI} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      
      </body>
    </Router>
  );
}

function Home() {
  return (<Container>
    <Card >
  <Card.Body>
    <Card.Title>Welcome to R&R Video</Card.Title>
    <Card.Text>
      Be Kind, Rewind
    </Card.Text>
    
  </Card.Body>
</Card>
  </Container> )
}

export default App;
