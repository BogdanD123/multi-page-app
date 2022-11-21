import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ProductInfo.css";
function ProductInfo() {
  const { product } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [product]);

  return (
    <div className="productInfoContainer">
      {<SingleProduct data={data} singleProductInfo={true} />}
    </div>
  );
}

export default ProductInfo;
