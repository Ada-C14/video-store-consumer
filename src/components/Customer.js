import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <div>
      {props.name} - {props.tel} - Videos out: {props.videosCheckedCount}
    </div>
  );
}

Customer.propTypes = {
  
};

export default Customer;