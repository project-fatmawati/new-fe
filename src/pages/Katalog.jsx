import React from "react";
import SidebarFilter from "../components/SidebarFilter";
import ListKatalog from "../components/ListKatalog";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import LeftSide from "../components/LeftSide";

function Katalog() {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center p-[80px] bg-cyan">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Katalog
        </h1>
      </div>
      <div className="container mx-auto px-4 py-[50px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 px-5">
            <SidebarFilter />
            {/* <LeftSide/> */}
          </div>
          <div className="w-full md:w-3/4 px-5">
            <ListKatalog />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Katalog;