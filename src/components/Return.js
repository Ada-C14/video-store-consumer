import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals';
const axios = require('axios');

const Return = (props) => {
  const [returnMessage, setReturnMessage] = useState();
  const [isReturning, setIsReturning] = useState(false);

  const onSubmitReturn = () => {
    if (!props.video) {
      return;
    }

    axios.post(`${BASE_URL}/${props.video}/return`, {}, {
      params: {
        'customer_id': props.customer.id
      }
    }).then((response) => {
      setReturnMessage(props.customer.name + ' returned: ' + props.video);
      console.log('Successfully Returned Video' + props.video);
      setIsReturning(true)
      setTimeout(() => {
        setIsReturning(false)
      }, 5000)
    }).catch((error) => {
      alert('Failed to check out video');
      console.log('FAILED ON API CALL');
    });
  }

  return (
    <span>
      <button className="btn btn-info" onClick={ onSubmitReturn }>
        Return Video
      </button>
      {
        isReturning &&
        <div className="alert alert-info">
          <p>{ returnMessage }</p>
        </div>
      }
    </span>
  );
}

export default Return;