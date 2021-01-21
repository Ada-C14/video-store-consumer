import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {

    const onSelectCustomer = () => {
        props.curCustomer(props.id, props.name)
    }


    return (
        <div className='customer'>
            <section className='customer__content'>
                <h3>ID: {props.id}</h3>
                <h4>{props.name}</h4>
                <h4>Videos Checked Out: {props.videosCheckedOut}</h4>
                
            </section>
            <button className='customer__select' onClick={onSelectCustomer}>Select Customer</button>
        </div>
    )
}

Customer.propTypes = {

};

export default Customer;