const Video = (props) => {
  const video = props.video
    return (
        <tr class="table-active">
            <th scope="row"><img src={video.image_url} className="" alt="poster" /></th>
            <th scope="row">{video.overview}</th>
            <td>{video.release_date}</td>
            <td><button onClick={() => (props.selectedVideoCallback(video))} className="btn btn-outline-primary">Select!</button></td>
        </tr>
    )
  }
  
  Video.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default Video;    