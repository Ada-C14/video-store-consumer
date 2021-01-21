import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import Video from './Video';
import AddVideo from './AddVideo';
import SearchDetail from './SearchDetail';
const axios = require('axios');

const BASE_URL = 'http://localhost:3000/movies?query=';


const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState({});
  const [submission,setSubmission] = useState({});
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    console.log(event.target.value);
    const newFormFields = {
      ...submission
    };
    newFormFields[event.target.name] = event.target.value;
    setSearchTerm(newFormFields);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission(searchTerm)
  };

  useEffect(() => {
    axios.get(BASE_URL + submission.title)
      .then((response) => {
        setResult(response.data);
      });
  }, [submission.title]);

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
        value={submission.title}
      />

      <div >
          <input type="submit" value="Submit Video Search" />
      </div>

    </form>
    <h4>Results</h4>
      {generateSearches}
    <h5>Video Details:</h5>
    <SearchDetail video = {searchDetail}/>
    <AddVideo video = {searchDetail}/>

</div>

}

export default Search;