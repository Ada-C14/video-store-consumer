import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import AddVideo from './AddVideo';
import SearchDetail from './SearchDetail';
const axios = require('axios');

const BASE_URL = 'http://localhost:3000/videos?query=';


const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [submission,setSubmission] = useState('');
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    let title = [event.target.name] = event.target.value;
    setSearchTerm(title);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission(searchTerm)
  };

  useEffect(() => {
    axios.get(BASE_URL + submission)
      .then((response) => {
        setResult(response.data);
      });
  }, [submission]);

  const [searchDetail, setSearchDetail] = useState([]);
  
  const onClickDetails = (video) => {
    setSearchDetail(video);
  } 

  const generateSearches = searchResult.map((search) => {
    return <Video key={search.id} video={search} onClickCallBack={onClickDetails}/>
  })

  return  <div>
    <form onSubmit={onSubmit}>
      <input 
        onChange={onInputChange}  
        name="title"
        placeholder="Search video title"
        type="text"
        value={searchTerm}
      />

      <div >
          <input type="submit" value="Search" />
      </div>

    </form>
    {searchResult && ( <h4>Results</h4> )}
    {generateSearches}
    <h5>Video Details:</h5>
    <SearchDetail video = {searchDetail}/>
    <AddVideo video = {searchDetail} setDisplayMessage={props.setDisplayMessage}/>
  </div>

}

export default Search;