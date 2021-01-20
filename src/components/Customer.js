import React, { useState } from 'react';
import './Customer.css';

const Customer = (props) => {

  const onCustomerClick = () => {
    props.onClickCallBack(props.customer);
  }

  return (
    <button className="customer-button" onClick={ onCustomerClick }>
      { props.customer.name}
    </button>
  );
}

export default Customer;