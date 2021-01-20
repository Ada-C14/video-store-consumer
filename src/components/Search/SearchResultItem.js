import React, { useState } from 'react'
import NewVideoForm from './NewVideoForm'
import './SearchResultItem.css'
import Moment from 'react-moment';
// import onClickOutside from 'react-onclickoutside';

const SearchResultItem = ({item, addVideoCallback}) => {
  const [selected, setSelected] = useState(false)

  const { 
    title, 
    overview, 
    release_date: releaseDate, 
    image_url: imageUrl, 
  } = item

  const toggleActive = () => {
      setSelected(!selected)
  }

 return(
   <div className='search-result-item' onClick={(toggleActive)}>
     <img src={imageUrl} alt={`Poster for ${title}`}/>

     <div className='search-result__content'>
      <h3>{title}</h3>
      <p><Moment format='LL'>{releaseDate}</Moment></p>

      <div className='add-video-button'>
        <NewVideoForm item={item} addVideoCallback={addVideoCallback}/>
      </div>
      
      {/* <div className={ selected ? 'show-details popup' : null }>
        <p className='popup__content'>{overview}</p>
      </div> */}
     </div>
     
   </div>
 )
}

export default SearchResultItem