
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from './components/VideoList';
// import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Link} from 'react-router-dom';
import CustomerCollection from './components/CustomerCollection';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

const API_URL_BASE = 'http://localhost:3000/videos';

const customers = [
  {name: 'Lisa', email: 'lisa@ada.org', phone: '321-123-1234'},
  {name: 'Jessica', email: 'jessica@lovelace.com', phone: '432-432-4321'},
  {name: 'Zoe', email: 'zoe@summerday.com', phone: '987-654-4321'},
 ];

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [allCustomers, setAllCustomers] = useState(customers);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL_BASE)
      .then((response) => {
        const apiVideoList = response.data;
        console.log(apiVideoList);
        setVideoList(apiVideoList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);
    
  


  return (
    <main>
      <header>
        <h1>
          <Link to={'/'}>Aloha Video Store</Link>
        </h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <Route exact={true} path={'/'} render={() => (
          <div>
            <h2>Latest</h2>
            <Container>
              <col>Video 1 with pic</col>
              <col>video 2 with pic</col>
              <col>video 3 with pic</col>
            </Container>
          </div>
        )} 
      />

      <Route 
        path={'/customers'} 
        render={(props) => <CustomerCollection {...props} allCustomers={allCustomers}/>}
      />
      <footer>
        Copyright
      </footer>
    </main>
  );
};

export default App;
