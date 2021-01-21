const SearchResult = (props) => {
    return (
        <tr class="table-active">
            <th scope="row"><img src={props.imageUrl} className="w-75" alt="poster" /></th>
            <th scope="row">{props.overview}</th>
            <td>{props.releaseDate}</td>
            <td><button type="button" class="btn btn-outline-primary">Add!</button></td>
        </tr>
    )
  }
  
  SearchResult.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default SearchResult;    