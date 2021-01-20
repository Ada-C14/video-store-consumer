import React, { useState } from 'react'
import NewVideoForm from './NewVideoForm'
import './SearchResultItem.css'
import Moment from 'react-moment';

const SearchResultItem = ({item, addVideoCallback}) => {
  const { 
    title, 
    overview, 
    release_date: releaseDate, 
    image_url: imageUrl, 
  } = item

 return(
   <div className='search-result-item'>
     <img src={imageUrl} alt={`Poster for ${title}`}/>

     <div className='details'>
      <h3>{title}</h3>
      <p><Moment format='LL'>{releaseDate}</Moment></p>
      <p>{overview}</p>
     </div>

    <div>
      <NewVideoForm item={item} addVideoCallback={addVideoCallback}/>
    </div>
      
     
   </div>
 )
}

export default SearchResultItem