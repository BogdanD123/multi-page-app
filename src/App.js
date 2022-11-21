import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="contentContainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
