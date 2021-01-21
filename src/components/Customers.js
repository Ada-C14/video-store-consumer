import React from 'react';
import CustomerList from './CustomerList';

const Customers = ({ setSelectedCustomerCallBack }) => {
  return (
    <div className="customers">
      <CustomerList setSelectedCustomerCallBack={ setSelectedCustomerCallBack } />
    </div>
  );
};

export default Customers;