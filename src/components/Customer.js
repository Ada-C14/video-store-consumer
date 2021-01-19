import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  return (
    <div>
      <span>{props.name}</span>
      <span>{props.email}</span>
      <span>{props.phone}</span>
      <button onClick={onClickSelect}>
        {props.selected ? 'unselect' : 'select'}
      </button>
    </div>
  );
};

Customer.PropTypes = {

};

export default Customer;