import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct({ data, singleProductInfo = false }) {
  const { title, image, price, id, description } = data;
  console.log(id);
  if (singleProductInfo) {
    return (
      <div className="productInfo">
        <div className="title">{title}</div>
        <img src={image} alt="slika" className="image" />
        <div className="description">{description}</div>

        <div className="price">Price:{price}$</div>
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      <div className="title">{title}</div>
      <img src={image} alt="slika" className="image" />
      <div className="navLink-Price">
        <div className="price">Price:{price}$</div>
        <NavLink to={`/product/${id}`} className="productButton">
          About Product
        </NavLink>
      </div>
    </div>
  );
}

export default SingleProduct;
