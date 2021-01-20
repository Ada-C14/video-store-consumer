import React from 'react'
import Moment from 'react-moment';
import './Video.css'

const Video = ({video, setSelectedVideoCallback}) => {
  const { 
    title, 
    overview, 
    release_date: releaseDate, 
    image_url: imageUrl, 
  } = video

  // const toggleActive = () => {
  //   setSelected(!selected)
  // }

  return (
    <div className='video'>
      <img src={imageUrl} alt={`Poster for ${title}`}/>

      <div className='video__content'>
        <h3>{title}</h3>
        <p><Moment format='LL'>{releaseDate}</Moment></p>

        {/* <div className={ selected ? 'show-details popup' : null }>
          <p className='popup__content'>{overview}</p>
        </div> */}
      </div>
    
    </div>
  )
}

export default Video