import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" href="#">
          Vidly
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
