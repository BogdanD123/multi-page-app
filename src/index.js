import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import Products from "./Pages/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import App from "./App";
import "./index.css";

//https://fakestoreapi.com/docs
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
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
