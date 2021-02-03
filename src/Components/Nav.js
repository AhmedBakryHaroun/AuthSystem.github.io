import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Navbar, NavLink } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Application
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <NavLink className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </NavLink>
              <NavLink className="nav-item">
                <Link className="nav-link" to={"/Login"}>
                  Login
                </Link>
              </NavLink>
              <NavLink className="nav-item">
                <Link className="nav-link" to={"/Register"}>
                  Signup
                </Link>
              </NavLink>
            </ul>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Nav;
