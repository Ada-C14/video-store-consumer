import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Customer from './Customer';

// import logo from './logo.svg';
// import './App.css';

const Customers = (props) => {
  
  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // const CUSTOMER_URL = 'http://localhost:3000/customers'
  // const CUSTOMER_URL = `${props.baseUrl}/customers` //this doesn't work yet??

  useEffect(() => {
    axios.get(`${props.baseUrl}/customers`)
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
  }, [`${props.baseUrl}/customers`]);

  const generateCustomers = (customers) => {
    let customerComponentArray = [];
    for (const customer of customers)
    {
      customerComponentArray.push(
        <Customer
            key={customer.id}
            id={customer.id}
            name={customer.name}
            registeredAt={customer.registered_at}
            address={customer.address}
            city={customer.city}
            state={customer.state}
            postalCode={customer.postal_code}
            phone={customer.phone}
            accountCredit={customer.account_credit}
            videosCheckedOutCount={customer.videos_checked_out_count}
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
