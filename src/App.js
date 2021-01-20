import React, { Component, useState } from 'react';
import CustomerCollection from './components/CustomerCollection'
import NavBar from './components/NavBar'

const customers = [
  {name: 'Lisa', email: 'lisa@ada.org', phone: '321-123-1234'},
  {name: 'Jessica', email: 'jessica@lovelace.com', phone: '432-432-4321'},
  {name: 'Zoe', email: 'zoe@summerday.com', phone: '987-654-4321'},
];

const App = () => {
  const [allCustomers, setAllCustomers] = useState(customers);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const checkout = (customer, video) => {

  };

  return (
    <main>
      <header>
        <h1>Aloha Video Store</h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <footer>
        Copyright
      </footer>
    </main>
  );
};

export default App;
