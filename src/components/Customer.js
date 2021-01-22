import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {

    const onButtonClick = () => {
        const selected = {
            id: props.id,
            name: props.name
        }
        props.selectCustomerCallback(selected);
    }

        return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <h5 className="card-subtitle">Videos currently rented: {props.videosCheckedOutCount}</h5>
                <p className="card-text">Customer since {props.registeredAt.slice(0, 4)}<br />
                Account Credit: {props.accountCredit}<br/>
                {props.phone}<br/>
                {props.address}<br/>
                {props.city}, {props.state} {props.postalCode}</p>
                {props.isSelected? <button className="btn btn-primary selected" onClick={onButtonClick}>SELECTED</button> : <button className="btn btn-primary select" onClick={onButtonClick}>SELECT</button> }
            </div>
        </div>
    )
}

Customer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    registeredAt: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    phone: PropTypes.string,
    accountCredit: PropTypes.number,
    videosCheckedOutCount: PropTypes.number,
    isSelected: PropTypes.bool,
    selectCustomerCallback: PropTypes.func
}

export default Customer;