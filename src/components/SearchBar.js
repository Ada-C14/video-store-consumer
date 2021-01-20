import { useHistory } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">
          Search Video Library
        </span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search Video Library"
        name="s"
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;