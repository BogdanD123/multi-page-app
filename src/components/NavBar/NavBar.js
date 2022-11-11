import React from "react";

import { Link, NavLink } from "react-router-dom";
import Products from "../../Pages/Products";
import DropDownButton from "../DropDownButton/DropDownButton";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navContainer">
      <div className="homePageButton btn">Home Page</div>
      <DropDownButton />
      <NavLink to={"/products"} className="btn">
        Products
      </NavLink>
    </nav>
  );
}

export default NavBar;
