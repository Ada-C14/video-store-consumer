import React, { useState } from 'react';

const Search = (props) => {
  const [title, setTitle] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchVideoCallback(title);
    setTitle('');
  };

  const renderVideoDetails = () => {
    return props.videoResults.map((result) => (
      <>
        <div> title: {result.title} </div>
        <div> overview: {result.overview} </div>
        <div> release date: {result.release_date} </div>
        <button onClick={() => props.videoSelectionCallback(result)}>
          Add to Library
        </button>
      </>
    ));
  };

  return (
    <div>
      <form
        className="new-search-form"
        onSubmit={onFormSubmit}
        data-testid="NewSearchForm--form"
      >
        <div>
          <label htmlFor="text">Title:</label>
          <input
            id="title"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="title"
          />
        </div>
        <input type="submit" value="Find Video" />
      </form>
      <p> {renderVideoDetails()} </p>
    </div>
  );
};
export default Search;
