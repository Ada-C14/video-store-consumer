import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import SingleCustomer from './SingleCustomer';

const Customers = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${props.url}${props.focus}`)
      .then((response) => {
        const newCustomerList = response.data;
        if (newCustomerList.length !== 0) {
          setCustomerList([...newCustomerList]);
        } else {
          setCustomerList(newCustomerList)
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [customerList]);

  const customerComponents = customerList.map((customer) => {
    return (
      <SingleCustomer
        id={customer.id}
        name={customer.name}
        accountCredit={customer.account_credit}
        videosCheckedOutCount={customer.videos_checked_out_count}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postalCode={customer.postal_code}
        phone={customer.phone}
        registeredAt={customer.registered_at}
        selectCustomerCallback={props.selectCustomerCallback}
      />
    )
  })
  return (
    <div>
      <div className="validation-errors-display">
        <h2 className="validation-errors-display__list">
          {errorMessage ? `${errorMessage}` : ''}
        </h2>
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Id</th>  
            <th>Name</th>
            <th>Account Credit</th>
            <th>Videos Checked out Count</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Postal Code</th>
            <th>Phone#</th>
            <th>Registered At</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {customerComponents}
        </tbody>
      </Table>
    </div>
  )
}

Customers.propTypes = {
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired,
};

export default Customers;