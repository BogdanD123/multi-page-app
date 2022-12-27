import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
function ProductInfo() {
  const { product } = useParams();
  const [data, setData] = useState([]);

  console.log(data, "here it is");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [product]);

  return (
    <div className="singleProductContainer">
      {<SingleProduct data={data} singleProductInfo={true} />}
    </div>
  );
}

export default ProductInfo;
