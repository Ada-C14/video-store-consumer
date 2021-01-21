import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://localhost:3000/rentals';

const axios = require('axios');


const Return = (props) => {

  const [ReturnMessage, setReturnMessage] = useState();

  const [CustomerAndVideo,setCustomerAndVideo] = useState({
    video: '',
    customer: ''
  });

  const onSubmitReturn = (event) => {
    event.preventDefault();

    setCustomerAndVideo({
      video: props.video,
      customer: props.customer.id
    });

  }


  useEffect(() => {
    if (CustomerAndVideo.video == '' ){
      return ;
    }
    axios.post(BASE_URL + CustomerAndVideo.movie + '/return', {
      
        customerId:CustomerAndVideo.customer

    })

      .then((response) => {
        setReturnMessage(props.customer.name + ' returned ' + CustomerAndVideo.video +' !' );
        props.setDisplayMessage({message: props.customer.name + ' Successfully Returned Movie ' + CustomerAndVideo.video , severity: 'success'});
        console.log('Successfully Returned Video' + CustomerAndVideo.video);
        console.log(response.data);
      })
      .catch((error)=>{

        props.setDisplayMessage({message: 'Failed to return video', severity: 'error'});
        console.log(error.response.data.errors);
        console.log('FAILED ON API CALL')
      });
      ;

  }, [CustomerAndVideo]);





  return <span>
    <button className="Return-checkIn-checkOut MainButton"  onClick = {onSubmitReturn}>
    Return Video
    </button>
    <p>{ReturnMessage}</p>

   </span>
}

export default Return