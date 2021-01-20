import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {


    return (
        <div>
            <h3>{props.id}</h3>
            <h4>{props.name}</h4>
            <h4>{props.videosCheckedOut}</h4>
        </div>
    )
}

Customer.propTypes = {

};

export default Customer;