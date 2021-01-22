import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

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
      <Button variant="outline-info"
          onClick={onSubmit}
          disabled={!props.customer || !props.video} >
            Return
      </Button>
    </div>
  );
}

CheckIn.propTypes = {
  customer:PropTypes.number,
  video: PropTypes.object,
  checkInCallback: PropTypes.func.isRequired,
};

export default CheckIn;