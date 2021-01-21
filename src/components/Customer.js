import PropTypes from 'prop-types';
import ClickToSelect from 'react-click-to-select';


const Customer = (props) => {
    return (
        <div className="customer">
            <ClickToSelect containerElement="div">
                <h5>{props.name}</h5>
            </ClickToSelect>
            
        </div>
    )
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    // overview: PropTypes.string.isRequired,
    // releaseDate: PropTypes.string.isRequired,
    // imageUrl: PropTypes.string.isRequired,
    // externalId: PropTypes.number.isRequired
}

export default Customer;