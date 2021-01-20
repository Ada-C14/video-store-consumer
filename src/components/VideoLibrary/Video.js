import React from 'react'
import Moment from 'react-moment';
import { Button } from 'react-bootstrap'
import './Video.css'
import { propTypes } from 'react-bootstrap/esm/Image';

const Video = ({ video, setSelectedVideoCallback }) => {
  const {
    id,
    title,
    overview,
    release_date: releaseDate,
    image_url: imageUrl,
  } = video

  // const toggleActive = () => {
  //   setSelected(!selected)
  // }

  return (

    <div className="video">
      <img src={imageUrl} alt={`Poster for ${title}`} />

      <div className='video__content'>
        <h3>{title}</h3>
        <p><Moment format='LL'>{releaseDate}</Moment></p>

        {/* <div className={ selected ? 'show-details popup' : null }>
          <p className='popup__content'>{overview}</p>
        </div> */}
      </div>
      <Button className='button' variant='link' size="sm" onClick={() => {setSelectedVideoCallback(title)}}>Select</Button>
    </div>
  )
}

export default Video