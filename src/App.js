import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import Search from './components/Search';
import CustomerList from './components/CustomerList';
import Customer from './components/Customer';
import API from './ApiSupport'


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [videoList, setVideoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // const onClickVideo = (video) => {
  //   setSelectedVideo(video);
  // }

  // POST /rentals/:title/check-out

  // const onClickCustomer = (customer) => {
  //   setSelectedCustomer(customer);
  // }

  const handleCheckout = () => {
    let todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + 7);

    API.post(`rentals/${selectedVideo.title}/check-out`, {
      // eslint-disable-next-line camelcase
      customer_id: selectedCustomer.id,
      // eslint-disable-next-line camelcase
      due_date: todaysDate,

    })
      .then((response) => {
        alert(`${selectedVideo.title} successfully checked out to ${selectedCustomer.name}.`);
        setSelectedVideo(null);
        setSelectedCustomer(null);
      })
      .catch((error) => {
        alert(`Error: ${selectedVideo.title} can't be checked out to ${selectedCustomer.name}.`);
      });
  }
// this could be moved to the search item level if we wanted
  const addVideo = (video) => {
    API.post(`videos`, video)
      .then((response) => {
        // next time we visit the videos page retrieves videos again, so we don't need to update 
        // const updatedLibrary = [...videoList, response.data]
        alert('Video successfully added');
        // setVideoList(updatedLibrary);
        setErrorMessage('');
      })
      .catch((error) => {
        alert('Video could not be added');
      });
  }

  return (
    <Router>
      <div>
        <nav className="Nav-bar">
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

        <span className="App-cart" >
            {selectedCustomer && selectedVideo ? <button onClick={handleCheckout}>Check Out</button> : null}
            {/* <button onClick={handleCheckout}>Check Out</button> */}
            {selectedCustomer !== null ? selectedCustomer.name : 'Select a customer' }
            {selectedVideo !== null ?   selectedVideo.title : 'Select a video' }
          </span>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers/:id" component={Customer}>
            <Customer />
          </Route>
          <Route path="/customers" >
            <CustomerList onCustomerSelected={setSelectedCustomer} />
          </Route>
          <Route path="/search">
            <Search addVideoCallback={addVideo}/>
          </Route>
          <Route path="/library">
            <Library onVideoSelected={setSelectedVideo} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// }

// class App extends Component {

// render() 
// // {
//   return (
//     <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/search">Search</Link>
//           </li>
//           <li>
//             <Link to="/library">Library</Link>
//           </li>
//           <li>
//             <Link to="/customers">Customers</Link>
//           </li>
//         </ul>
//       </nav>

//       <span className = "App-cart" >test</span>

//       {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//       <Switch>
//       <Route path="/customers/:id" component={Customer}>
//         <Customer />
//         </Route>
//         <Route path="/customers" >
//           <CustomerList />
//         </Route>
//         <Route path="/search">
//           <Search />
//         </Route>
//         <Route path="/library">
//           <Library />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
//   );
// }
// }

export default App;
