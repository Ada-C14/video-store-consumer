import {React, useState, useEffect} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import axios from 'axios'
import CustomerList from './CustomerList'
import {Container} from 'react-bootstrap'


const SelectedCustomer = (props) => {
    
    const customer = props.customer
    
    return(
        customer &&(
        <div>
            <Container>
                <h4><strong>{customer.name}</strong></h4>
                <p>Customer ID# {customer.id}</p>
                <p>{customer.phone}</p>
                <p>Address: {customer.address} <br/> {customer.city}, {customer.state} {customer.postal_code}</p>

                <p>Account Credit: {customer.account_credit}<br/>
                Videos Checked Out: {customer.videos_checked_out_count}</p>
            </Container>
        </div>
        ))
    }

export default SelectedCustomer;