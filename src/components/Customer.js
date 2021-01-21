import React from 'react';
import PropTypes from 'prop-types';
// import ClickToSelect from 'react-click-to-select';


const Customer = (props) => {
    return (
        <div className="customer">
          <h5>{props.name}</h5>
          <button id={props.id} onClick={() => props.onClickCallback(props)}>Select</button>
        </div>
    )
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    // overview: PropTypes.string.isRequired,
    // releaseDate: PropTypes.string.isRequired,
    // imageUrl: PropTypes.string.isRequired,
    // externalId: PropTypes.number.isRequired
    onClickCallback: PropTypes.func.isRequired
}

export default Customer;