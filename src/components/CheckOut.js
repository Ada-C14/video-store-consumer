import React from 'react';
import PropTypes from 'prop-types';

const CheckOut = (props) => {
  // event handlers
  const onSubmit = (event) => {
    event.preventDefault();
    
    props.checkOutCallback({
      customer: props.customer,
      video: props.video,
      dueDate: new Date(new Date(new Date().setDate(new Date().getDate()+7)).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]   
    });
  }

  return (
    <div>
      <button
          onClick={onSubmit}
          disabled={!props.customer || !props.video} >
            Check Out
      </button>
    </div>
  );
}

CheckOut.propTypes = {
  customer:PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  checkOutCallback: PropTypes.func.isRequired,
};

export default CheckOut;