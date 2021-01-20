import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const Search = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  
  return (
    <div className="App">
      <header>
        <h1>Search Video library</h1>
      </header>
      <SearchBar searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}/>
      <VideoList keyWord={searchQuery}/>
    </div>
  );
}

export default Search;
