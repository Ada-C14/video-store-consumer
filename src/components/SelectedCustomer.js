import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import axios from 'axios'
import CustomerList from './CustomerList'


const SelectedCustomer = (props) => {
    
    const customer = props.customer
    
    return(
        customer &&(
        <div>
            <h3>{customer.name}</h3>
            <p>{customer.address}</p>
            {/* <img>{image}</img> */}
        </div>
        ))
    }

export default SelectedCustomer;