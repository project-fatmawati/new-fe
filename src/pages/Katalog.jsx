import React from "react";
// import Sidebar from "../components/Sidebar";
import ListKatalog from "../components/ListKatalog";
import { Link } from "react-router-dom";
// import LeftSide from "../components/LeftSide";
// import ShopFiltering from "../components/ShopFiltering";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Katalog() {
  return (
    <>
    <Navbar/>
      <div className="w-full flex justify-center p-[80px]  bg-cyan">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Katalog
        </h1>
      </div>
      <div className="container mx-auto px-4 py-[100px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full sm:w-1/4 px-5">
            {/* <Sidebar /> */}
          </div>
          <div className="w-full sm:w-3/4 px-5">
            <ListKatalog />
          </div>
        </div>
      </div>
      <Footer/>



      
    </>
  );
}

export default Katalog;
