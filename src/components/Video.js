const Video = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.overview}</h2>
      </div>
    )
  }
  
  Video.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default Video;    