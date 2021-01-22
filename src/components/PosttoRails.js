  // TESTING AREA

  const checkoutUrl = 'http://localhost:3000/rentals/';

  const [checkouts, setCheckouts] = useState([]);
  const [errors, setErrors] = useState(null);

  // where does this go to get video & customer
  // axios, 2nd parameter takes the payload, pass in obj with all those values
  useEffect ( (title) => {
    axios.post(`${checkoutUrl}${title}/check-out`,{
      video: ???,
      customer: ???,
      due_date: 
    } )
    .catch((error) => {
      setErrors(error.message);
      console.log(error.message);
    })
  }, [])

  /////




  // axios.get maeks a get request to that url, but checkin/checkout make post request
  // instead of making that request to customers, should be whatever url you associate with checkin/checkout
