import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DetailProduk() {
  const location = useLocation();
  const product = location?.state?.product;

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center p-[80px] bg-cyan">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Detail Product
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-[100px] pb-[100px]">
        <div className="md:w-[40%]">
          <div className="w-full md:w-1/2 mx-auto border flex justify-center">
            <img
              className="w-[full] h-[full] object-cover rounded-lg p-3"
              src={product?.image}
              alt={product?.title}
            />
          </div>
        </div>
        <div className="md:w-[60%] pr-[30px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">{product?.description}</p>
          <p className="text-lg font-bold">
            Size: <span className="font-normal">M</span>
          </p>
          <p className="text-lg font-bold mb-4">
            Colors: <span className="font-normal ">Merah dan Hitam</span>
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <button className="w-[50%] py-4 bg-black hover:bg-mustard duration-300 text-white font-bold text-xl hover:text-black font-titleFont">
              <Link to="/Cart">Add to Cart</Link>
            </button>
            <button className="w-[50%] py-4 bg-teal-500 hover:bg-cyan duration-300 border text-black font-bold text-xl hover:text-black font-titleFont">
              Add to Wishlist
            </button>
          </div>
          <p className="text-md">
            Categories:{" "}
            <span className="font-bold">
              Spring collection, Streetwear, Women
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailProduk;
