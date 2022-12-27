import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import "./Categories.css";
function Categories() {
  const [singleCategory, setSingleCategory] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setSingleCategory(json);
      });
  }, [category]);

  return (
    <>
      {singleCategory.map((item, index) => {
        return (
          <div className="cardsContentContainer" key={index}>
            <SingleProduct data={item} />
          </div>
        );
      })}
    </>
  );
}

export default Categories;
