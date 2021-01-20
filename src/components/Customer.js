import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  return(
    <div>
      <h3>{props.name}</h3>
    </div>
    
  )
};

Customer.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Customer;
