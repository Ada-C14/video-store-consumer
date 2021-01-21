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


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onClickCustomer = (customer) => {
    setSelectedCustomer(customer);
  }

  const onClickVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <Router>
      <div>
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
 

        <span className="App-cart" >
         
            
             {selectedCustomer !== null ? `${selectedCustomer.name}` : `Select a customer` }
             {selectedVideo !== null ? `${selectedVideo.title}` : `Select a video` }
          </span>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers/:id" component={Customer}>
            <Customer />
          </Route>
          <Route path="/customers" >
            <CustomerList onClickCustomer={onClickCustomer} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library onClickVideo={onClickVideo}/>
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
