const Selected = (props) => {
    let selectedVideoInfo = '';
    if(props.video) {
    selectedVideoInfo = <div>{props.video.title}</div>
    }

    let selectedCustomerInfo = '';
    if(props.customer) {
        selectedCustomerInfo = <div>{props.customer.name}</div>
    }
    return (
        <div>
            {selectedVideoInfo}
            {selectedCustomerInfo}
            {/* <button>Checkout</button> */}
        </div>
        );
    };
export default Selected;