import React, { useState } from 'react'

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
      <div>
        <label>Stock Video</label>
        <select onChange={(e) => {setStartingInventory(e.target.value)}}>
          {[...Array(21).keys()].map(i => (
            <option value={i} key={i} >{i}</option>
          ))}
        </select> 

        <button onClick={onAddToLibrary}>Add to Library</button>
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