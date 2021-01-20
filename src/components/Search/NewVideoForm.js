import React, { useState } from 'react'
import './NewVideoForm.css'

const NewVideoForm = ({item, addVideoCallback}) => {
  const [startingInventory, setStartingInventory] = useState(0)
  const [addedToLibrary, setAddedToLibrary] = useState(false)

  const onAddToLibrary = (event) => {
    const newItem = {...item}
    newItem.inventory = event.target.value

    addVideoCallback(newItem)
    setAddedToLibrary(true)
  }

  const showDropdown = () => {
    return (
      <div className='add-video-form'>
        <h4><label>Stock Video</label></h4>
        <select onChange={(e) => {setStartingInventory(e.target.value)}}>
          {[...Array(21).keys()].map(i => (
            <option value={i} key={i} >{i}</option>
          ))}
        </select> 

        <button onClick={onAddToLibrary} value={startingInventory}>Add to Library</button>
      </div> 
    )
  }


 return(
    <div>
      {addedToLibrary ? <div>Added to Library</ div> : showDropdown()}
    </div>
      
 )
}

export default NewVideoForm