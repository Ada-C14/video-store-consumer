import React from 'react';
import './LibraryVideo.css'

const LibraryVideo = (props) => {
  const {title} = props.data
  const handleClick = () => {
    props.videoCallback(props.data)
  }

  return (
    <div className="library-video" onClick={handleClick}>
      <div className='library-video__content'>
        <img className='library-video__img' src={props.data.image_url} alt={title} />
        <h2 className='library-video__title'>{title}</h2>
      </div>
    </div>
  )
}

export default LibraryVideo;