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
        videos_checked_out_count={customer.videos_checked_out_count}
        selectCustomerCallback={props.selectCustomerCallback}
        currentCustomer={props.currentCustomer}
      />
    </li>
  );
});

  return (
    <ul>
      <h1>CUSTOMERS</h1>
      {customerComponents}
    </ul>
  );
};


CustomerList.propTypes = {

};

export default CustomerList;