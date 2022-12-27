import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// I am using bootstrap for this App. just to know, you have alredy CSS a bit
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
