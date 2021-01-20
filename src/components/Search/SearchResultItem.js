import React from 'react'
import './SearchResultItem.css'
import Moment from 'react-moment';

const SearchResultItem = ({item}) => {

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
   </div>
 )
}

export default SearchResultItem