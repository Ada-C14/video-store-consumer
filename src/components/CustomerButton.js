import React, { useState } from 'react';
import './CustomerButton.css';

const CustomerButton = (props) => {

  const onCustomerButtonClick = () => {
    props.onClickCallBack(props.customer);
  }

  return (
    <button className="customer-button btn btn-primary m-1" onClick={ onCustomerButtonClick }>
      { props.customer.name }
    </button>
  );
}

export default CustomerButton;