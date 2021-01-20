import React, { useState } from 'react'

const NewVideoForm = ({props}) => {
  const [formFields, setFormFields] = useState({
    id:'',
    title:'',
    overview:'',
    releaseDate:'',
    imageUrl:'',
  });

  const [added, setAdded] = useState(false)

  const onAddToLibrary = (event) => {
    const newFormFields = {
      ...formFields,
    }
    props.addVideoCallback(newFormFields)
    setAdded(true)
  }

 return(
    <div>
      {added ? '' : <button onClick={onAddToLibrary}>Add to Library</button>}
    </div>
      
 )
}

export default NewVideoForm