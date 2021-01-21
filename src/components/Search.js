import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Video from '.components//Video';
const axios = require('axios');

const BASE_URL = 'http://localhost:3000/movies?query=';


const Search = (props) => {

  const [submission, setSearchTitle] = useState('')
  const [searchResult, setResult] = useState('')

  const onInputChange = (event) => {
    const newFormFields = {
      title:''
    };
    newFormFields[event.target.name] = event.target.value;
    setSubmission(newFormFields);
  };

  const onSubmit = (event) => {
    event.preventDefault();

  }

  useEffect(() => {

    axios.get(BASE_URL + ")

      .then((response) => {
        setResult(response.data);
      });

  }, []);

  const generateSearches = searchResult.map((search)=> {
    return <Video key={search.id} video={search} setSelectedVideoCallBack= {props.setSelectedVideoCallBack}/>
  })

  return <div>
    <form onSubmit={onSubmit}>
      <input type="submit"  onChange={onInputChange}  name="video"
            placeholder="Search video title"
            type="text"
            value={submission.title}/>
      <div >
          <input type="submit" value="Submit Video Search" className="PlayerSubmissionForm__submit-btn" />
      </div>

    </form>
    <h4>Results</h4>
  {generateSearches}
</div>

}

export default Search;