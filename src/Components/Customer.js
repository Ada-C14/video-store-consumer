import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

    const onSelectCustomer = () => {
        props.curCustomer(props.id, props.name)
    }


    return (
        <div>
            <h3>ID: {props.id}</h3>
            <h4>Customer Name: {props.name}</h4>
            <h4>Videos Checked Out: {props.videosCheckedOut}</h4>
            <button onClick={onSelectCustomer}>Select Customer</button>
        </div>
    )
}

Customer.propTypes = {

};

export default Customer;