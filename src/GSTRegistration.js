import React from "react";

function GSTRegistration() {
  return (
    <div className="container center-align">
      <div className="row">
        <h4>Enter your details</h4>
        <form
          className="col s12"
          style={{
            border: "5px solid linear-gradient(to right, #fc00ff, #00dbde)",
            padding: "10px",
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="input-field col s6">
            <input id="number" type="number" className="validate" />
            <label for="number">Mobile Number</label>
          </div>
          <div className="input-field col s6">
            <input id="alnumber" type="number" className="validate" />
            <label for="alnumber">Alternate Number</label>
          </div>

          <div className="input-field col s12">
            <input id="state" type="text" className="validate" />
            <label for="state">State</label>
          </div>

          <div className="input-field col s6">
            <input id="pan" type="number" className="validate" />
            <label for="pan">Pan Number</label>
          </div>
          <div className="input-field col s6">
            <input id="adhaar" type="number" className="validate" />
            <label for="adhaar">Adhaar Number</label>
          </div>
          <div className="input-field col s6">
            <input id="trade" type="text" className="validate" />
            <label for="trade">Trade Name</label>
          </div>
          <div className="input-field col s6">
            <input id="fname" type="text" className="validate" />
            <label for="fname">Father's Name</label>
          </div>
          <div className="input-field col s6">
            <input id="dates" type="date" class="datepicker" />
            <label for="dates">Date</label>
          </div>
          <div className="input-field col s6" style={{ display: "flex" }}>
            <span>Gender</span>
            <p>
              <label>
                <input name="group1" type="radio" checked />
                <span>Male</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>Female</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" />
                <span>Other</span>
              </label>
            </p>
          </div>
          <div className="input-field col s6" style={{ display: "flex" }}>
            <span>Residential Status</span>
            <p>
              <label>
                <input name="group1" type="radio" checked />
                <span>Resident</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>Non-Resident</span>
              </label>
            </p>
          </div>
          <div className="input-field col s6">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Bussiness Address</label>
          </div>
          <div className="input-field col s4">
            <input id="bname" type="text" className="validate" />
            <label for="bname">Bank Name</label>
          </div>
          <div className="input-field col s4">
            <input id="anumber" type="number" class="datepicker" />
            <label for="anumber">Account Number</label>
          </div>
          <div className="input-field col s4">
            <input id="ifnumber" type="number" class="datepicker" />
            <label for="ifnumber">IFSC Code</label>
          </div>
          <div className="input-field col s6">
            <textarea id="textaarea1" class="materialize-textarea"></textarea>
            <label for="textaarea1"> Address</label>
          </div>
          <div className="input-field col s6">
            <textarea id="textbbarea1" class="materialize-textarea"></textarea>
            <label for="textbbarea1">Best 5 HSN Code</label>
          </div>
          <button className=" btn-large waves-effect waves-light red">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default GSTRegistration;
