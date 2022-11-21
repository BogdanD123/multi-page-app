import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const [categories, setCategories] = useState(["Home"]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories([...categories, ...json]));
  }, []);

  return (
    <nav className="navContainer">
      <div className="containerOfAllCategories">
        {categories.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `category/${item}`}
              className="categoriesNavLinks"
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
