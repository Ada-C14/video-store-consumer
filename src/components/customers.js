import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Customers = () => {
  const CUSTOMER_URL = 'http://localhost:3000/customers';
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(CUSTOMER_URL)
      .then((response) => {
        const customers = response.data;
        console.log(customers)
        setCustomerList(customers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const showCustomers = customerList.map((customer) => {
    return (
      <div>
          <p>{customer.id} {customer.name}</p>
        {/* TODO, decide what else to include?
        Choices are:
        registered_at
        address
        city
        state
        postal_code
        phone
        account_credit
        videos_checked_out_count */}
      </div>
    )
  })


  return (
    <div>
      {showCustomers}
    </div>
  )

};

Customers.propTypes = {

};

export default Customers;
