import axios from 'axios';
// {selectedCustomer, selectedVideo, baseUrl}
const Checkout = (props) => {

  console.log(props.selectedCustomer)
  console.log(props.selectedVideo)
  console.log(props.baseUrl)

const checkout = () => {
    // const theFuture = new Date(new Date().getTime()+(7*24*60*60*1000));

    console.log(props.selectedCustomer)
    console.log(props.baseUrl)

    // axios.post(`${props.baseUrl}/rentals/${props.selectedVideo.title}/check-out`, {
    //     props.selectedCustomer.id,
    //     theFuture
    // })
    //     .then((response) => {
    //     console.log(response)
    //     })
    //     .catch((error) => {

    //     });
    }
    return (
    <div>
        <ul>
            <li>{props.selectedCustomer && props.selectedCustomer.name} </li>
            <li>{props.selectedVideo && props.selectedVideo.title}</li>
        </ul>
        <button onClick={checkout} className="btn btn-outline-primary">Checkout</button>
    </div>
    )
  }
  
  Checkout.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default Checkout;    