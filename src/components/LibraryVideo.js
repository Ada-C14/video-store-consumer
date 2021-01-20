import React from 'react';
import './LibraryVideo.css'

const LibraryVideo = (props) => {
  const {title} = props.data
  console.log(props)
  const handleClick = () => {
    console.log(`${title} is selected`)
    props.videoCallback(props.data)
    // need to define a callback function to save video title to state to eventually checkout
    // props.videoSelectCallback(title);
  }

  return (
    <div className="library-video">
      <div className='library-video__content'>
        <img className='library-video__img' src={props.data.image_url} alt={title} />
        <h2 className='library-video__title'>{title}</h2>
      </div>

      <button className='library-video__select' onClick={handleClick}>Select</button>
    </div>
  )
}

export default LibraryVideo;