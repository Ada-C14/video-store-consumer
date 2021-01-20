import React, { useState } from 'react';
import './Search.css';
import TitlesContainer from './TitlesConatiner';

const Search = (props) => {

    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

const editSearchTerm = (e) => {
  this.setState({searchTerm: e.target.value})
}

const dynamicSearch = () => {
  return this.videos.title.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}



    return (
      <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
        <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a title!'/>
        <br></br>
        <h3>Here are the search results:</h3>
        <TitlesContainer titles = {this.dynamicSearch()}/>
      </div>
    );
};
export default Search;