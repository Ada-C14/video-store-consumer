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
      <td>
        <Button
          onClick={onSelect}>
            Select
        </Button>
      </td>
      <td>{props.id}</td>  
      <td>{props.name}</td>
      <td>{props.accountCredit}</td>
      <td>{props.videosCheckedOutCount}</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.postalCode}</td>
      <td>{props.phone}</td>
      <td>{props.registeredAt}</td>
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