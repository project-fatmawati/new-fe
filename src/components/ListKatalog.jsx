import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ListKatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      const response2 = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      const data1 = await response1.json();
      const data2 = await response2.json();
      setProducts([...data1, ...data2]); // Combine both datasets
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        {products.map((prod) => (
          <div className="items-center rounded-2xl p-5 bg-gray-200 hover:bg-gray-300 hover:text-black relative shadow-xl duration-300 group max-w-[300px]">
            <Link to={`/DetailProduk`} state={{ product: prod }}>
              <div className="w-full object-cover rounded-md block mx-auto">
                <img src={prod?.image} />
              </div>
              <div className="text-center font-semibold text-xl group-hover:text-black line-clamp-2">
                <h1> {prod?.title}</h1>
              </div>
              <div className=" p-1 text-center">
                <p className="text-black text-md line-clamp-1">Description</p>
              </div>
              <button className=" block mx-auto bg-black hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-3 group-hover:bg-teal-300 group-hover:text-black">
                Order Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListKatalog;
