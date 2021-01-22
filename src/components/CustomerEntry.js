import React from 'react';
import PropTypes from 'prop-types';

// This returns an entry in the customer list. 
// name, id and account credit

const CustomerEntry = (props) => {
  return (<button
    onClick={() => {props.listCallback(
      {id: props.id,
      name: props.name,
      accountCredit: props.accountCredit}
      ) 
    }
  }>
    {props.name}
  </button>  
  )
}

// For callback, need to have id & account credit come back up so it can be passed to rails
// or put acct credit logic in backend?

CustomerEntry.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  listCallback: PropTypes.func.isRequired
}

export default CustomerEntry;