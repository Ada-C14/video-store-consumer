import React from 'react'
import Moment from 'react-moment';
import { Button } from 'react-bootstrap'
import './Video.css'
import NewVideoForm from '../Search/NewVideoForm'

const Video = ({ currentPathname, video, setVideo, addVideoCallback }) => {

  const {
    id,
    title,
    overview,
    release_date: releaseDate,
    image_url: imageUrl,
  } = video

  const videoButton = () => {    
    if (currentPathname === '/library') {
      return (
        <Button className='button' variant='link' size="sm" onClick={() => {setVideo(title)}}>Select</Button>
      )
    } else if (currentPathname === '/search') { 
      return ( 
        <NewVideoForm className='add-video-button' video={video} addVideoCallback={addVideoCallback}/>
      )
    }
  }
  

  return (
    <div className="video">
      <img src={imageUrl} alt={`Poster for ${title}`} />

      <div className='video__content'>
        <h3>{title}</h3>
        <p><Moment format='LL'>{releaseDate}</Moment></p>
      </div>

      <div>
        {videoButton()}
      </div>
      

    </div>
  )
}

export default Video