import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import "./Products.css";
function Products() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className="contentContainer">
        <div className="cardsContainer">
          {data.map((item) => {
            return <SingleProduct data={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
