import VideoSearch from './components/VideoSearch';
import VideoLibrary from './components/VideoLibrary';
import CustomerList from './components/CustomerList';
import VideoSearchBar from './components/VideoSearchBar';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Video Search</Link>
            </li>
            <li>
              <Link to='/library'>Video Library</Link>
            </li>
            <li>
              <Link to='/customers'>Customers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/search'>
            component={ props =>
            <VideoSearch {...props}/>
            }</Route>
          <Route path='/library'>
            <VideoLibrary />
          </Route>
          <Route path='/customers'>
            component={props =>
            <CustomerList {...props} />}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

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