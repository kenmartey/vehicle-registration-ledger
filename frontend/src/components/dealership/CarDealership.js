import React from "react";

const CarDealership = () => {
  return (
    <div>
      <h1>Car Dealership / Purchase.</h1>
      <form>
        <div className="form-group spacer">
          <label htmlFor="DealerName">Dealer name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dealer name"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="location">Location</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="RegistrationNumber">Registration Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Registration Number"
          />
        </div>
        <div className="form-group spacer">
          <label htmlFor="Owner">Owner</label>
          <input type="text" className="form-control" placeholder="Owner" />
        </div>
        <div className="form-group spacer">
          <label htmlFor="model">Model</label>
          <textarea type="text" className="form-control" placeholder="Model" />
        </div>
        <div className="form-group spacer">
          <label htmlFor="make">Make</label>
          <input type="text" className="form-control" placeholder="Make" />
        </div>
        <div className="form-group spacer">
          <label htmlFor="company">Color</label>
          <input type="text" className="form-control" placeholder="Color" />
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

export default CarDealership;
