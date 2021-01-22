import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import Video from './Video';
// import AddVideo from './AddVideo';
import SearchDetail from './SearchDetail';
import './Search.css';


const axios = require('axios');

const BASE_URL = 'http://localhost:3000/videos?query=';


const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [submission,setSubmission] = useState('');
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    const {value} = event.target
    setSearchTerm(value);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission(searchTerm)
  };

  useEffect(() => {
    axios.get(BASE_URL + submission)
      .then((response) => {
        setResult(response.data);
      })
      .catch ((error) => {
        console.log(error.message);
      });
  }, [submission]);

  const [searchDetail, setSearchDetail] = useState([]);
  
  const onClickDetails = (video) => {
    setSearchDetail(video);
  } 

  const generateSearches = searchResult.map((search) => {
    return <Video key={search.id} video={search} onClickCallBack={onClickDetails}/>
  })

  return (
    <div className="search__container">
      <form className="search__bar" onSubmit={onSubmit}>
        <input 
          className="search__text"
          onChange={onInputChange}  
          name="title"
          placeholder="Search video title"
          type="text"
          value={searchTerm}
        />

        <input className="search__btn" type="submit" value="Search" />
      </form>

      <div className="search__content">
      {generateSearches.length > 0 && <h4 className="search-results__header">Results</h4>}
        <div className='search-results__container'>
          <div className='search-results'>
            {generateSearches}
          </div>
        </div>
        
        <SearchDetail video={searchDetail} onClickCallBack={onClickDetails} setDisplayMessage={props.setDisplayMessage} />
      </div>

    </div>
  )

}

export default Search;