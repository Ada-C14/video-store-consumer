import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = (props) => {

  return(
    <div className="customer">
      <button onClick={() => {props.setCustomer(props.id, props.name)}}>select</button>
      <h3 className="customer__content">{props.name}</h3>
    </div>
    
  )
};

Customer.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Customer;
