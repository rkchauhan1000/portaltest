import React from "react";

function Recharge() {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <h2>Recharge Details</h2>
          <div className="input-field col s12">
            <i className="material-icons prefix">date_range</i>
            <input type="text" className="datepicker" />
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">attach_money</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Enter Amount</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* <i className="material-icons prefix">attach_money</i> */}
              <a
                className="dropdown-trigger btn"
                href="#"
                data-target="dropdown2"
              >
                Select Payment Mode
              </a>
              {/* <label htmlFor="icon_prefix">Enter Amount</label> */}
            </div>
          </div>
          <a className=" btn-large waves-effect waves-light red">Submit</a>
        </form>
      </div>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a href="#!">PAYTM</a>
        </li>
        <li>
          <a href="#!">IMPS</a>
        </li>
        <li>
          <a href="#!">NEFT</a>
        </li>
        <li>
          <a href="#!">CASH</a>
        </li>
      </ul>
    </div>
  );
}

export default Recharge;
