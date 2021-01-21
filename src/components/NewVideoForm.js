import React, { useState } from 'react'

const NewVideoForm = (props) => {
  // const [formFields, setFormFields] = useState({
  //   id:props.video.id,
  //   title:props.video.title,
  //   overview:props.video.overview,
  //   releaseDate:props.video.release_date,
  //   imageUrl:props.video.image_url,
  // });

  const [added, setAdded] = useState(false)

  const onAddToLibrary = (event) => {
    // const newFormFields = {
    //   ...formFields,
    // }
    // newFormFields[event.target.name] = event.target.value;
    // setFormFields(newFormFields);
    props.addVideoCallback(props.video)

    setAdded(true)
  }

 return(
    <div>
      {added ? '' : <button onClick={onAddToLibrary}>Add to Library</button>}
    </div>
      
 )
}

export default NewVideoForm