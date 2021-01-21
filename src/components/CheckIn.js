import React from 'react';
import PropTypes from 'prop-types';

const CheckIn = (props) => {
  // event handlers
  const onSubmit = (event) => {
    event.preventDefault();
    
    props.checkInCallback({
      customer: props.customer,
      video: props.video,
      returned: true
    });
  }

  return (
    <div>
      <button
          onClick={onSubmit}
          disabled={!props.customer || !props.video} >
            Check In
      </button>
    </div>
  );
}

CheckIn.propTypes = {
  customer:PropTypes.number,
  video: PropTypes.object,
  checkInCallback: PropTypes.func.isRequired,
};

export default CheckIn;