import React from "react";

const VehicleRegistration = () => {
  return (
    <div>
      <h1>Vehicle Registration.</h1>
      <form>
        <div className="form-group spacer">
          <label htmlFor="RegistrationDate">Registration Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Registration Date"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="Validity">Validity</label>
          <input type="text" 
          className="form-control" 
          placeholder="Validity" />
        </div>
        <div className="form-group spacer">
          <label htmlFor="ChasisNumber">Chasis Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Chasis Number"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="RegistrationNumber">Registration Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Registration Number"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="Owner">Owner</label>
          <textarea type="text" className="form-control" placeholder="Owner" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary spacer submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleRegistration;
