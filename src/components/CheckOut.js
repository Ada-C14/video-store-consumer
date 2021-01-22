import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

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
      <Button variant="outline-info"
          onClick={onSubmit}
          disabled={!props.customer || !props.video} >
            Check Out
      </Button>
    </div>
  );
}

CheckOut.propTypes = {
  customer:PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  checkOutCallback: PropTypes.func.isRequired,
};

export default CheckOut;