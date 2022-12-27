import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VscArrowLeft, VscBracketDot } from "react-icons/vsc";
import "./SingleProduct.css";
import { hover } from "@testing-library/user-event/dist/hover";

function SingleProduct({ data, singleProductInfo = false }) {
  const { title, image, price, id, description } = data;

  const navigation = useNavigate();

  if (singleProductInfo) {
    return (
      <>
        <VscArrowLeft
          className={"arrowBackIcon"}
          onClick={() => navigation(-1)}
          style={{
            width: "2%",
            height: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            top: "2rem",
            left: "2rem",
            border: "1px solid",
            borderRadius: "50%",
            cursor: "pointer",
         
          }}
        />

        <div className="productInfo">
          <div className="title">{title}</div>
          <img src={image} alt="slika" className="pic" />
          <div className="description">{description}</div>
          <div className="price">Price:{price}$</div>
        </div>
      </>
    );
  }
  return (
    <div className="cardsContainer">
      <div className="title">{title}</div>
      <img src={image} alt="slika" className="image" />
      <div className="navLink-Price">
        <div className="price">Price:{price}$</div>
        <NavLink to={`/product/${id}`} className="aboutProductButton">
          About Product
        </NavLink>
      </div>
    </div>
  );
}

export default SingleProduct;
