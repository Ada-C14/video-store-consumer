import React from 'react';
import './LibraryVideo.css'


const LibraryVideo = (props) => {

  const {title, id} = props.data
  const handleClick = () => {
    props.videoCallback(props.data)
    props.activeCallback(id)
  }

  return (
    <div className={`library-video__container ${props.isActive ? 'active' : ''}`}>
    <div className='library-video' onClick={handleClick}>
      <div className='library-video__content'>
        <img className='library-video__img' src={props.data.image_url} alt={title} />
        <p className='library-video__title'>{title}</p>
      </div>
    </div>
    </div>
  )
}

export default LibraryVideo;