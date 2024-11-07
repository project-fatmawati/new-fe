import React from "react";
import Img1 from "../assets/shirt.png"
import Img2 from "../assets/shirt2.png"
import Img3 from "../assets/shirt3.png"
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

];

const RecentProduct = () => {
  return (
    <div>
      <div className="container mx-auto pb-[50px]">
        {/* Header section */}
        {/* <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-4xl font-bold pb-2">
            Recent Products
          </h1>
          <p data-aos="fade-up" className="text-xl text-black pt-5">
            Ambillah Bagian dari Gerakan Sustainability Fahion dengan Menukarkan Pakaian Anda Sekarang
          </p>
        </div> */}
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 pb-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in"
                key={data.id}
                className="items-center rounded-2xl p-5 bg-white hover:text-black  hover:border relative shadow-xl duration-300 group max-w-[300px]"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md block mx-auto"
                />
                <div className="text-center">
                  <div className="flex justify-center pt-5 ">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <h3 className="font-semibold text-xl">
                    {data.title}
                  </h3>
                </div>
                <p className="text-gray-500 duration-300 text-sm line-clamp-1">
                  {data.description}
                </p>
                <button
                  className=" block mx-auto bg-teal hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-teal-500 "
                >
                  Barter Now
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center  text-xl mt-10 cursor-pointer bg-black hover:bg-teal-600 text-white py-1 px-5 rounded-full">
              <Link to="/Katalog">View All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProduct;
