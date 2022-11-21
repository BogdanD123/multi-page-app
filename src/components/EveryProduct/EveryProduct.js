import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Categories from "../../Pages/Categories";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./EveryProduct.css";

function EveryProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="cardsContentContainer" key={index}>
            <SingleProduct data={item} />
          </div>
        );
      })}
    </>
  );
}

export default EveryProduct;
