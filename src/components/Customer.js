import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../index.css';

const Customer = ({
  customer: {
    id,
    name,
    registered_at: registeredAt,
    address,
    city,
    state,
    postal_code: postalCode,
    phone,
    account_credit: accountCredit,
    videos_checked_out_count: videosCheckedOutCount,
  },
}) => (
  <div className="customer-padding">
    <div className="row ">
      <div className="col s12 m10 ">
        <div className="card teal lighten-2">
          <div className="card-content grey lighten-4">
            <span className="card-title">
              {id} - {name}
            </span>
          </div>
          <div className="card-list-cus">
            <p className="cusText">
              Account Credits - {accountCredit}
              Videos Checked Out - {videosCheckedOutCount}
            </p>
          </div>
          <box className="button">
            <button
              className="waves-effect waves-block waves-light z-depth-2"
              // onClick={addVideoToLibrary}
            >
              Select Customer
            </button>
          </box>
        </div>
      </div>
    </div>
  </div>
);

export default Customer;
