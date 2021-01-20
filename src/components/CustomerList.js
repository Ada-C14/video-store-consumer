import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer'

const CustomerList = (props) => {
  const custList = props.list.map((customer) => {
    return(< Customer key={customer.id} name={customer.name} />)
  })
  return(custList) 

  // const customerComponentsList = props.list.map(() => {
  //   <Customer key={props.id} name={props.name} />
  // }) 
  
  // return(customerComponentsList)
}
CustomerList.propTypes = {
  list: PropTypes.array
}
export default CustomerList;