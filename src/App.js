import CustomerList from './components/CustomerList.js'
import MovieLibrary from './components/MovieLibrary.js'
import MovieSearchBar from './components/MovieSearchBar.js'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const BASE_API_URL = 'http://localhost:3000';

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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Movie Library</Link>
            </li>
            <li>
              <Link to="/customers">Customer List</Link>
            </li>
            <li>
              <Link to="/search">Search Movies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/library">
            <MovieLibrary url={BASE_API_URL}/>
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/results">
            <MovieSearchResults />
          </Route>
          <Route path="/">
            <Home />
            <MovieSearchBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

