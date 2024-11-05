import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function DetailProduk() {
  const location = useLocation();
  const product = location?.state?.product;

  return (
    <>
      <div className="w-full flex justify-center p-[40px]  bg-slate-300">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Detail Product
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-[50px]">
        <div className="md:w-1/2">
          <div className="w-full md:w-1/2 mx-auto">
            <img
              className="w-[400px] h-full object-cover rounded-lg"
              src={product?.image}
              alt={product?.title}
            />
          </div>
        </div>
        <div className="md:w-1/2 p-[10px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">{product?.description}</p>
          <p className="text-lg font-bold mb-4">
            Colors: <span className="font-normal">Merah dan Hitam</span>
          </p>
          <div className="flex flex-col gap-4 mb-4">
            <button className="w-full py-4 bg-black border hover:bg-gray-500 duration-300 text-white font-bold text-xl hover:text-black font-titleFont">
              Add to Cart
            </button>
            <button className="w-full py-4 bg-black border hover:bg-gray-500 duration-300 text-white font-bold text-xl hover:text-black font-titleFont">
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
    </>
  );
}

export default DetailProduk;
