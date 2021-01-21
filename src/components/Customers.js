import React, { useState } from 'react';
import './Customers.css';
import DisplayCustomerDetail from './DisplayCustomerDetail';
import CustomerList from './CustomerList';

const Customers = (props) => {
  const [selectedCustomer, setSelectedCustomer] = useState();

  const setSelectedCustomerCallBack = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="customers">
      <CustomerList setSelectedCustomerCallBack={ setSelectedCustomerCallBack } />
      {
        selectedCustomer &&
        <DisplayCustomerDetail customer={ selectedCustomer } />
      }
    </div>
  );
};

export default Customers;