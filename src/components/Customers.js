import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Customer from './Customer';

const Customers = (props) => {
  
  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.baseUrl}/customers`)
      .then((response) => {
        const railsCustomerList = response.data;
        setCustomersList(railsCustomerList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [`${props.baseUrl}/customers`]);

  const generateCustomers = (customers) => {
    let customerComponentArray = [];
    for (const customer of customers)
    {
      customerComponentArray.push(
        <Customer
          key={customer.id}
          customer={customer}
          selectedCustomerCallback={props.selectedCustomerCallback}
          
        />
      )
    }
    return customerComponentArray;
  };

    return (
      <div>
        <h1><em>Customer List</em></h1>
        <section className="container w-75">
          <table className="table table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Account Credit</th>
                <th scope="col">Current Rentals</th>
                <th scope="col">Select For Rental?</th>
              </tr>
            </thead>
            <tbody>
              {generateCustomers(customersList)}
            </tbody>
          </table>
        </section>
      </div>
    );
  }

Customers.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customers;
