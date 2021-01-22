import React from 'react';
import Customer from './Customer';
import './Customers.css';
import PropTypes from 'prop-types';

const Customers = ({customerList, onSelectedCustomer}) => {

  const customerComponents = customerList.map((customer) => {
    return (
        <Customer
          id={customer.id}
          name={customer.name}
          key={customer.id}
          onSelectedCustomer={onSelectedCustomer}
        />
    )
  });

  return (
    <div className='customers'>
      <h2 className='page-title'>CUSTOMERS</h2>
      {customerComponents}
    </div>
  )
};

Customers.propTypes = {
  customerList: PropTypes.array.isRequired,
  onSelectedCustomer: PropTypes.func.isRequired,
}

export default Customers;