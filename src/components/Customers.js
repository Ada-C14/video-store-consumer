import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SingleCustomer from './SingleCustomer';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.focus}`)
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

Customers.propTypes = {
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
};

export default Customers;