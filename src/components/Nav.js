import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
    <h3>Video rental store</h3>
        <ul className="nav-links">
		<Link to="/search"> 
			<li>Search</li>
		</Link>
		<Link to="/library">
			<li>Library</li>
		</Link>
		<Link to="/customers">
			<li>Customers</li>
		</Link>
        </ul> 
    </nav>
);
};

export default Nav;
