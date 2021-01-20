import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className='app'>
//   <h1>React Router Demo</h1>
//   <Navigation />
//   <Main />
// </div>
//     );
//   }
// }

const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
</div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/search'>Video Search</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/library'>Video Library</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/customers'>List Customers</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/search' component={Search}></Route>
    <Route exact path='/library' component={Library}></Route>
    <Route exact path='/customers' component={Customers}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to Video Store</h1> 
  </div>
);

const Search = () => (
  <div className='search'>
    <h1>Search for a new video</h1>
  </div>
);

const Library = () => (
  <div className = 'library'>
    <h1>Peruse our video library</h1>
  </div>
);

const Customers = () => (
  <div className = 'customers'>
    <h1>List of customers</h1>
  </div>
);

export default App;
