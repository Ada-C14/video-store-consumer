import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

import './Customers.css';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`${props.url}/customers`)
    .then((response) => {
      const apiCustomerList = response.data
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  const customerComponents = customerList.map((customer) => {
    return (<Customer 
      id={customer.id}
      name={customer.name}
      onClickCallback={props.onClickCallback}
      registeredAt={customer.registered_at}
      phone={customer.phone}
      key={customer.id} 
      address={customer.address}
      city={customer.city}
      postalCode={customer.postal_code}
      accountCredit={customer.account_credit}
      videosCheckedOutCount={customer.videos_checked_out_count}
    />);
  });

return (
  <div>
    <h2 className="header">Our Customers 📇</h2>
    {errorMessage ? <p>{errorMessage}</p> : ''}
    <table>
      <tr>
        <th>Name</th>
        <th>Member Since</th>
        <th># Videos Checked Out</th>
        <th className="select-header"></th>
      </tr>
      {customerComponents}
    </table>
  </div>
);
};

Customers.propTypes = {
  url: PropTypes.string.isRequired,
  onClickCallback: PropTypes.string.isRequired
};

export default Customers;