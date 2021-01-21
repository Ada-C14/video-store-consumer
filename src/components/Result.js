import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  return (
    <div>
      {props.title} - {props.overview} - {props.release_date}
      {/* <img alt= "Movie Poster"> {props.image_url}</img> */}
    </div>
    
  );
}

export default Result