import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../App.css";

const SidebarComponents = () => {
  return (
    <Fragment>
      <div></div>
      <div></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light spacer">
        <a className="navbar-brand" href="/">
          Hyperledger-VR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Car Dealership
            </Link>

            <Link className="nav-item nav-link" to="/vehicle-registration">
              Vehicle Registration
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default SidebarComponents;
