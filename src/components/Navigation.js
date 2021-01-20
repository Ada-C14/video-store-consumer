import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/library'>Library</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/search'>Search</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/customers'>Customers</NavLink></li>
      </ul>
    </nav>
  )

};

export default Navigation;