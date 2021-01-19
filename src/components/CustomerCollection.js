import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

const CustomerCollection = (props) => {

  const customerList = props.customers.map(customer => {
    return (
      <li key={i}>
        
      </li>
    );
  });
};

CustomerCollection.PropTypes = {

};

export default CustomerCollection