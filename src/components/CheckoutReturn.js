import React from 'react';
import PropTypes from 'prop-types';

import './CheckoutReturn.css';

const CheckoutReturn = (props) => {
  const customer = props.currentCustomer
  const video = props.selectedVideo

  return (
    <div className='main-container'>
      <section>
        {`${props.currentCustomer ? 'true' : 'nope'}`}
      </section>
      <section>
        {`${props.selectedVideo ? 'true' : 'nope'}`}
      </section>
    </div>
  )
}

CheckoutReturn.propTypes = {

};

export default CheckoutReturn;