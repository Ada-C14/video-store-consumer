import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const onSelectButtonClick = () => {
    if (props.name !== props.selectedCustomer?.name) {
      props.onClickSelect(props.customer)
    } else {
      props.onClickSelect(null)
    };
  };

  return (
    <div>
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.phone}</span>
      <button onClick={onSelectButtonClick} >
        {props.name === props.selectedCustomer?.name ? 'unselect' : 'select'}
      </button>
    </div>
  );
};

// Customer.PropTypes = {

// };

export default Customer;