import React from "react";
import "./SingleProduct.css";

function SingleProduct({ data }) {
  const [title, image, price] = data;
  return (
    <div className="contentCardContainer">
      <div className="cardsContainer">
        <div className="title">{title}</div>
        <img alt="picture" src={image} />
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

export default SingleProduct;
