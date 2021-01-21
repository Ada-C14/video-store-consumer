const SearchResult = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.overview}</h3>
      </div>
    )
  }
  
  SearchResult.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default SearchResult;    