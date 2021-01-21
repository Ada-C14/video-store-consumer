const Customer = (props) => {

  const customer = props.customer
  return (

    <tr class="table-active">
        <th scope="row">{customer.name}</th>
        <td>{customer.phone}</td>
        <td>{customer.accountCredit}</td>
        <td>{customer.videosCheckedOutCount}</td>
        <td><button onClick={() => (props.selectedCustomerCallback(customer))} class="btn btn-outline-primary">Select!</button></td>
    </tr>
)
}

Customer.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customer;    