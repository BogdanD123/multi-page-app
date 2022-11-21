import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import EveryProduct from "./components/EveryProduct/EveryProduct";
import Categories from "./Pages/Categories";
import ProductInfo from "./components/productInfo/ProductInfo";
import "./index.css";

//https://fakestoreapi.com/docs
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EveryProduct />,
      },
      {
        path: "category/:category",
        element: <Categories />,
      },
      {
        path: "product/:product",
        element: <ProductInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
