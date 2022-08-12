import { useEffect } from 'react';
import { useState } from 'react';
import userimage from '../../assets/user-setting-male.png'
import { getCurrentUserDetail } from '../../auth';
const CProfile =()=>{

    const [customer, setCustomer] = useState({
        name:getCurrentUserDetail().name,
        contact_detail:getCurrentUserDetail().contactdetail,
        id:getCurrentUserDetail().id
    })
    // useEffect(()=>{
    //     if()
    // })

    return(
        <div className="d-flex justify-content-center">
        <div className="card bg-light mb-3">
          <div className="card-header">
          <img
                src={userimage}
                width="63"
                height="62"
                className="d-inline-block align-center"
                alt="user-logo"
              />
            <h3 className="d-flex justify-content-center">My Profile</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <form>
                <div className="form-row">
                  <div className="col ">
                    <h3 className="d-flex justify-content-center">
                      <b> Name: {customer.name}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                </div>

                <hr />
                <div className="form-row">
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b>Login Details: {customer.contact_detail}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b>Id: {customer.id}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                    // onClick={this.handleAddPassengerForm}
                  >
                    Edit My Profile
                  </button>
                </div>
              </form>
            </h5>
          </div>
        </div>
      </div>
    )
}
export default CProfile;