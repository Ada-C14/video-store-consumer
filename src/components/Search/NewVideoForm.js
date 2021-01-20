import React, { useState } from 'react'
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
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
        <DropdownButton  id='inventory' title={startingInventory}>
          {[...Array(21).keys()].map(i => (
            <Dropdown.Item onSelect={(eventKey) => {setStartingInventory(eventKey)}} value={i} eventKey={i} >{i}</Dropdown.Item>
          ))}
        </DropdownButton> 

        <Button onClick={onAddToLibrary} value={startingInventory} variant="outline-secondary">Add to Library</Button>
      </div> 
    )
  }


 return(
    <div>
      {addedToLibrary ? <Button variant="secondary" disabled>In Video Library</ Button> : showDropdown()}
    </div>
      
 )
}

export default NewVideoForm