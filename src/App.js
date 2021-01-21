import React, { Component } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chosenCustomer: {},
    }
  }

  selectCustomer = (chosenCustomer) => {
    this.setState({chosenCustomer})
  }

  API_URL = 'http://localhost:3000'
  

  render() {
    
    return (
      <Router>
      <div>
        <nav>
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
              <Link to="/customers">Customer</Link>
            </li>
            <li>{this.chosenCustomer}</li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search"
            component={ props =>
            <VideoSearch { ...props }/>
            }/>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers" 
            component={ props => 
            <CustomerList { ...props }
            selectCustomerCallback={this.selectCustomer}
            url={this.API_URL}/>
          }/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


function Home() {
  return <h2>Home</h2>;
}

function Library() {
  return <h2>About</h2>;
}

// function Customers() {
//   return <h2>Users</h2>;
// }


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
  };
};


export default App;