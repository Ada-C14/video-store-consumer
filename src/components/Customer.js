import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const Customer = (props) => {
  const onSelectButtonClick = () => {
    if (props.customer.name !== props.selectedCustomer?.name) {
      props.onClickSelect(props.customer)
    } else {
      props.onClickSelect('')
    };
  };

  return (
    <tr>
      <td>{props.customer.id}</td>
      <td>{props.customer.name}</td>
      <td>{props.customer.phone}</td>
      <td><Button variant="info" onClick={onSelectButtonClick} >
        {props.customer.name === props.selectedCustomer?.name ? 'unselect' : 'select'}
      </Button></td>
    </tr>
  );
};

// Customer.PropTypes = {

// };

export default Customer;