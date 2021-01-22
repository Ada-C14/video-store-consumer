import React from 'react';
import { Button } from 'react-bootstrap'

const InnerSearchBar = (props) => {

  const clearSubmit = (e) => {
    e.preventDefault();
    props.resetCallback()
  }

  return (
    <form
      onSubmit={clearSubmit}
    >
      <input
        value={props.search}
        onInput={(e) => props.setSearch(e.target.value)}
        type="text"
        id="api-search"
        placeholder={props.content}
        name="s"
      />
      <Button type="submit">Clear Search</Button>
    </form>
  );
};

export default InnerSearchBar;