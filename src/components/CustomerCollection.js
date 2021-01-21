import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import {Table} from 'react-bootstrap';

const CustomerCollection = (props) => {

  const customerList = props.customerList.map((customer, i) => {
    return (
        <Customer customer={customer} 
            selectedCustomer={props.selectedCustomer} 
            onClickSelect={props.onClickSelect}
        />
    );
  });

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>phone</th>
          <th>select a customer</th>
        </tr>
      </thead>

      <tbody>
        {customerList}
      </tbody>

    </Table>
  );
};

// CustomerCollection.PropTypes = {

// };

export default CustomerCollection