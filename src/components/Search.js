import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const Search = (props) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  
  const resetSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className="App">
      <header>
        <h2 className="display-4">Search Video Library</h2>
      </header>
      <SearchBar searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}
                 resetCallback={resetSearch}/>
      <VideoList keyWord={searchQuery}
                 url={props.url}
                 focus={props.focus} />
    </div>
  );
}

Search.propTypes = {
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
};

export default Search;
