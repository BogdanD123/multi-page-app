import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import EveryProduct from "./components/SingleProduct/SingleProduct";
import Products from "./Pages/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="contentContainer">
          <Header />
          <div className="navProductContainer">
            <NavBar />
            <Products />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
