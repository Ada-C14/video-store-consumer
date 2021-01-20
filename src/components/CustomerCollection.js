import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

const CustomerCollection = (props) => {

  const customerList = props.allCustomers.map((customer, i) => {
    return (
      <li key={i}>
        <Customer name={customer.name} email={customer.email} phone={customer.phone} />
      </li>
    );
  });

  return (
    <ul>
      {customerList}
    </ul>
  );
};

CustomerCollection.PropTypes = {

};

export default CustomerCollection