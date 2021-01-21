import React, { useState } from 'react';

// import PropTypes from 'prop-types';

const Search = (props) => {
  const [title, setTitle] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchVideoCallback(title);
    setTitle('');
  };

  const renderVideoDetails = () => {
    let vidDetails = '';
    console.log(vidDetails);

    for (let key in props.videoResults) {
      vidDetails += `${key}: ${props.videoResults[key]}`;
    }
    console.log(vidDetails);
    return vidDetails;
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
