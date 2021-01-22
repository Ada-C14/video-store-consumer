import React from 'react'
import PropTypes from 'prop-types';

const NewVideoForm = (props) => {

  const onAddToLibrary = (event) => {

    props.addVideoCallback(props.video)
  }

 return(
    <div>
      {props.videos.some(movie => movie.external_id === props.video.external_id) ? 'In Stock' : <button onClick={onAddToLibrary}>Add to Library</button>}
    </div>
 )
}

NewVideoForm.propTypes = {
  video: PropTypes.object,
  addVideoCallback: PropTypes.func,
  videos: PropTypes.array,
};

export default NewVideoForm;