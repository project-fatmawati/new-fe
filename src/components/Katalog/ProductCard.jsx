import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
  const navigate = useNavigate();


  const handleBarterClick = () => {
     // Navigate to the product detail page, passing the product ID as a parameter
     navigate(`/DetailProduk/${product.id}`);
   };
  return (

    
    <div className="items-center rounded-2xl p-5 bg-white hover:border hover:text-black relative shadow-xl duration-300 group max-w-[300px]">
        <div className="w-full object-cover rounded-md block mx-auto">
          <img src={product.image} />
        </div>
        <div className="text-center font-semibold text-xl group-hover:text-black line-clamp-2">
          <h1> {product.title}</h1>
        </div>
        <div className=" p-1 text-center">
          <p className="text-black text-md line-clamp-1">{product.description}</p>
        </div>
        <button className=" block mx-auto bg-teal hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-teal-500 " onClick={handleBarterClick}>
          Lihat Detail
        </button>
    </div>
  );
}

export default ProductCard;
