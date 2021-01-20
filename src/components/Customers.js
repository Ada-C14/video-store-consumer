import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import logo from './logo.svg';
// import './App.css';

const Customers = () => {
  
  const [customersList, setCustomersList] = useState([]);
  const CUSTOMER_URL = 'http://localhost:3000/customers'

  useEffect(() => {
    axios.get(CUSTOMER_URL)
      .then((response) => {
        // Get the list of students
        console.log(response.data);
        const apiCustomerResponse = response.data;
        // Set the state
        setCustomersList(apiCustomerResponse);
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        // console.log(error.message);
      });
  }, []);

  const customer = customersList.map(({customer}) => {
    return (
      <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
      />
    );
  });

    return (
      <div>
        Customer List
        {customersList}
      </div>
    );
  }

CustomerList.propTypes = {
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default CustomerList;
