import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import './CustomerList.css';

const CustomerList = (props) => {
  const customerComponents = props.customers.map((customer) => {
  return (
    <li key = {customer.id}>
      <Customer
        customerId={customer.id}
        customerName={customer.name}
        videosCheckedOutCount={customer.videos_checked_out_count}
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
  customers: PropTypes.arrayOf(PropTypes.shape(
    {
      customerId: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      videosCheckedOutCount: PropTypes.number,
    },
  )),
  selectCustomerCallback: PropTypes.func.isRequired,
  currentCustomer: PropTypes.object,
};

export default CustomerList;