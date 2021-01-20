import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SingleCustomer from './SingleCustomer';

// base url depents on the link of rails server
const BASE_URL = 'http://localhost:3000/customers'

const Customers = () => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then((response) => {
        const newCustomerList = response.data;
        if (newCustomerList.length !== 0) {
          setCustomerList([...newCustomerList]);
        } else {
          setCustomerList(newCustomerList)
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const customerComponents = customerList.map((customer) => {
    return (
      <SingleCustomer
        id={customer.id}
        name={customer.name}
        accountCredit={customer.account_credit}
        videosCheckedOutCount={customer.videos_checked_out_count}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postalCode={customer.postal_code}
        phone={customer.phone}
        registeredAt={customer.registered_at}
      />
    )
  })
  return (
    <div>
      <div className="validation-errors-display">
        <h2 className="validation-errors-display__list">
          {errorMessage ? `${errorMessage}` : ''}
        </h2>
      </div>
      <div className="board">
        {customerComponents}
      </div>
    </div>
  )
}

export default Customers;