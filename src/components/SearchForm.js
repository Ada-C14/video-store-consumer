import React, { useState } from 'react';

const Search = (props) => {
  const [title, setTitle] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchVideoCallback(title);
    setTitle('');
  };

  const renderVideoDetails = () => {
    let details = '';

    for (let key in props.videoResults) {
      details += `${key}: ${props.videoResults[key]}`;
    }
    return details;
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
