import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavLink,Form, FormControl, Button, Image } from 'react-bootstrap'

const SingleCustomer = (props) => {
  const onSelect = (event) => {
    event.preventDefault();
    props.selectCustomerCallback({
      id: props.id   
    });
  }

  return (
      <tr>
      <th>
        <Button
          onClick={onSelect}>
            Select
        </Button>
      </th>
      <th>{props.id}</th>  
      <th>{props.name}</th>
      <th>{props.accountCredit}</th>
      <th>{props.videosCheckedOutCount}</th>
      <th>{props.address}</th>
      <th>{props.city}</th>
      <th>{props.state}</th>
      <th>{props.postalCode}</th>
      <th>{props.phone}</th>
      <th>{props.registeredAt}</th>
    </tr>
  )
}
  
SingleCustomer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  accountCredit: PropTypes.number.isRequired,
  videosCheckedOutCount: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
  registeredAt: PropTypes.number.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired,
};

export default SingleCustomer;