import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import EveryProduct from "./components/EveryProduct/EveryProduct";
import Categories from "./Pages/Categories";
import Products from "./components/Products/Products";
import "./index.css";

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
