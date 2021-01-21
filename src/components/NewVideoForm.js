import React from 'react'

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
export default NewVideoForm;