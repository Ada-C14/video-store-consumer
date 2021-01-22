import React, { useState } from 'react';
import axios from 'axios';
import NumericInput from 'react-numeric-input';
import PropTypes from 'prop-types';

const Result = (props) => {
  const [formShowState, setFormShowState] = useState(false);
  // const [inventory, setInventory] = useState(0)

  const onClickChangeFormState = () => {
    setFormShowState( !formShowState )
  };

  const addVideoForm = () => {
    return (
      <div>
        <p>Inventory: </p>
        {/* <NumericInput min={0} max={100} value={0}/> */}
        <button onClick={addVideo} >Add to Library</button>
      </div>
      
    );
  }

  const addVideo = () => {
    axios.post(`${props.url}/videos/?`, props.object)
    .then( response => {
      // should be adding this to the local state ??
      console.log(response.data)

    })
    .catch( error => {
      // const errors = error.response.data.errors
      // setErrorMessage(errors)
    }) 
  };

  return (
    <div>
      {props.title} - {props.overview} - {props.release_date}
      <button onClick={ onClickChangeFormState }>Options</button>

      { formShowState ? addVideoForm() : null }

      {/* <img alt= "Movie Poster"> {props.image_url}</img> */}
    </div>
    
  );
}


Result.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line camelcase
  release_date: PropTypes.string,

};

export default Result
