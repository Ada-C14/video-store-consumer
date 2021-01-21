import React from 'react';
import PropTypes from 'prop-types';

const CheckOut = (props) => {
  // event handlers
  const onSubmit = (event) => {
    event.preventDefault();

    props.checkOutCallback({
      customer: props.customer,
      video: props.video,
      dueDate: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]   
    });
  }

  return (
    <div className="App">
      <header>
        <h1>CheckOut Video library</h1>
      </header>
      <button
          onClick={onSubmit}>
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