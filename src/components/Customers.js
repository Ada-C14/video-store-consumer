import React from 'react';
import './Customers.css';
import CustomerList from './CustomerList';

const Customers = ({ setSelectedCustomerCallBack }) => {
  return (
    <div className="customers">
      <CustomerList setSelectedCustomerCallBack={ setSelectedCustomerCallBack } />
    </div>
  );
};

export default Customers;