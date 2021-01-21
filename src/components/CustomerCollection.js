import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

const CustomerCollection = (props) => {

  const customerList = props.customerList.map((customer, i) => {
    return (
      <li key={i}>
        <Customer customer={customer} name={customer.name} email={customer.email} phone={customer.phone} selectedCustomer={props.selectedCustomer} onClickSelect={props.onClickSelect}/>
      </li>
    );
  });

  return (
    <ul>
      {customerList}
    </ul>
  );
};

// CustomerCollection.PropTypes = {

// };

export default CustomerCollection