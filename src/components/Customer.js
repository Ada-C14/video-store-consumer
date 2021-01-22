import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <span>
      {props.name} - {props.tel} - Videos out: {props.videosCheckedCount}
    </span>
  );
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  videosCheckedCount: PropTypes.number.isRequired

};

export default Customer;