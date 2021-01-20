import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Customer from './Customer';

// import logo from './logo.svg';
// import './App.css';

const Customers = () => {
  
  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const CUSTOMER_URL = 'http://localhost:3000/customers'

  useEffect(() => {
    axios.get(CUSTOMER_URL)
      .then((response) => {
        // console.log(response.data);
        const railsCustomerList = response.data;
        // console.log(apiCustomerResponse[0].name)
        // Set the state
        setCustomersList(railsCustomerList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, []);

  const generateCustomers = (customers) => {
    let customerComponentArray = [];

  for (const customer of customers) 

  {
    customerComponentArray.push(
      <Customer
          key={customer.id}
          id={customer.id}
          name={customer.name}
      />
    )
  }

    return customerComponentArray;
  }; 

    return (
      <div>
        Customer List
        {generateCustomers(customersList)}
      </div>
    );
  }

Customers.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customers;
