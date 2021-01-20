import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import './CustomerList.css';

const CustomerList = (props) => {
  const customerComponents = props.customers.map((customer) => {
  return (
    <li key = {customer.id}>
      <Customer
        customer_id={customer.id}
        customer_name={customer.name}
      />
    </li>
  );
});

  return (
    <ul>
      <h1>CUSTOMER INFORMATION</h1>
      {customerComponents}
    </ul>
  );
};


CustomerList.propTypes = {

};

export default CustomerList;