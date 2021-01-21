const Customer = (props) => {
  return (
    <tr class="table-active">
        <th scope="row">{props.name}</th>
        <td>{props.phone}</td>
        <td>{props.accountCredit}</td>
        <td>{props.videosCheckedOutCount}</td>
    </tr>
)
}

Customer.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customer;    