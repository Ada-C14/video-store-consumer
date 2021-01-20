import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

const CustomerList = (props) => {
    
  const allCustomersURL = 'http://localhost:3000/customers'

  const [customers, setCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
      axios.get(allCustomersURL)
      .then((response) => {
          const RailsApiCustomerList = response.data
          setCustomers(RailsApiCustomerList);
      })
      .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
      });
  }, []);

  function CustomerList() {  
    console.log(customers)
    const listItems = customers.map((customer) =>
        <li key={customer.id}>

            {customer.name}
            {customer.address}
        </li>
        );
        return (
        <ul>{listItems}</ul>
        );
    }

    return (
      <div>
          <h3>All Customers</h3>
          <h4>Search or Select a Customer: </h4>
        
          <CustomerList/>
      </div>
  )  
}

CustomerList.propTypes = {

}

export default CustomerList