import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CustomerList.css';

const CustomerList = (props) => {
  return (
    <div>
      {props.customers}
      CustomerList Component
    </div>
  )
}

CustomerList.propTypes = {

};

export default CustomerList;