import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Customer from './Customer';

// import logo from './logo.svg';
// import './App.css';

const Customers = () => {
  
  const [customersList, setCustomersList] = useState([]);
  const CUSTOMER_URL = 'http://localhost:3000/customers'

  useEffect(() => {
    axios.get(CUSTOMER_URL)
      .then((response) => {
        // Get the list of students
        // console.log(response.data);
        const apiCustomerResponse = response.data;
        console.log(apiCustomerResponse[0].name)
        // Set the state
        setCustomersList(apiCustomerResponse);
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        // console.log(error.message);
      });
  }, []);

  // const generateCustomers = customersList.map(({customer}) => {
  //   return (
  //     <Customer
  //       key={customer.id}
  //       id={customer.id}
  //       name={customer.name}
  //     />
  //   );
  // });

  const generateCustomers = (customers) => {
    let customerComponentArray = [];
    // console.log(cards)

  for (const customer of customers) 
  // console.log(card[`card`][`id`])
  {
    customerComponentArray.push(
      <Customer
          key={customer.id}
          id={customer.id}
          name={customer.name}
          // emoji={card[`card`][`emoji`]}
          // deleteCard={deleteCard}
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
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customers;
