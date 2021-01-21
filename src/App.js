import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers'
import Videos from './components/Videos'
import Search from './components/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

export default function App() {
  const BASE_URL = 'http://localhost:3000'
  const VIDEO_URL = `${BASE_URL}/videos`
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  // will receive information about which video was selected and set the state
  const onVideoSelected = (video) => {
    setSelectedVideo(video)
  }
  
    // will receive information about which customer was selected and set the state
  const onCustomerSelected = (customer) => {
    setSelectedCustomer(customer)
  }


  //  post "/rentals/:title/check-out", to: "rentals#check_out", as: "check_out"

  
  const checkout = () => {
      const CHECKOUT_URL = `${BASE_URL}/rentals/${selectedVideo.title}/check-out`
      axios.post(CHECKOUT_URL)
        .then((response) => {
          const data = response.data;
          console.log(data)
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
  }

  return (
    <Router>
      <div>
        {/* { selectedVideo && selectedVideo.title}
        { selectedCustomer && selectedCustomer.name} */}
        
        { selectedVideo && selectedCustomer && (
          <button onClick={checkout}>
            Checkout {selectedVideo.title} for {selectedCustomer.name}
          </button>
        )
        }

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers onCustomerSelected={onCustomerSelected}/>
          </Route>
          <Route path="/library">
            {/* note that library and videos names don't match*/}
            <Videos videoURL={VIDEO_URL} onVideoSelected={onVideoSelected}/>
          </Route>
          <Route path="/search">
            <Search videoURL={VIDEO_URL} />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// // re-named to customer singular (problem with import Customers otherwise
// function Customer() {
//   return <h2>Customers</h2>;
// }

// function Search() {
//   return <h2>Search</h2>;
// }

// function Library() {
//   return <h2>Library</h2>;
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

