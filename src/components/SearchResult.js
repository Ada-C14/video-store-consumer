import axios from 'axios';

const SearchResult = (props) => {
const { video } = props
const addVideo = () => {
console.log(video)
console.log(props.baseUrl)
  axios.post(`${props.baseUrl}/videos`, video)
    .then((response) => {
      // What should we do when we know the post request worked?
      console.log(response)
      // const updatedData = [...studentList, response.data];
      // setStudentList(updatedData);
      // setErrorMessage('');
    })
    .catch((error) => {
      // What should we do when we know the post request failed?
      // setErrorMessage(error.message);
    });
}

    return (

        <tr class="table-active">
            <th scope="row"><img src={video.image_url} className="w-75" alt="poster" /></th>
            <th scope="row">{video.title}</th>
            <td>{video.release_date}</td>
            <td><button onClick={addVideo} class="btn btn-outline-primary">Add!</button></td>
        </tr>
    )
  }
  
  SearchResult.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default SearchResult;    