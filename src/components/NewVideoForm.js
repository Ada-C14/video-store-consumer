import React, { useState } from 'react'

const NewVideoForm = (props) => {

  // const [added, setAdded] = useState()

  const onAddToLibrary = (event) => {

    props.addVideoCallback(props.video)
    // setAdded(true)
  }

 return(
    <div>
      {props.videos.some(movie => movie.external_id === props.video.external_id) ? '' : <button onClick={onAddToLibrary}>Add to Library</button>}
    </div>
      
 )
}

export default NewVideoForm;