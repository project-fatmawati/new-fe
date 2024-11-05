import React from "react";
import shirt from "../assets/shirt.png";

const CartItem = ({ item }) => {
  return (
    <tr>
      <td className="py-2">
        <div className="flex items-center gap-3">
          <img className="w-[150px] h-[150px]" src={shirt} />
          <div>
            <p className="text-lg">{item.name}</p>
            <p className="text-lg">Warna: {item.color}</p>
            <p className="text-lg">Ukuran: {item.size}</p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 text-right text-lg">Rp {item.price}</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded">
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded">
            +
          </button>
        </div>
      </td>
      <td className="py-2 px-4 text-right text-lg">Rp {item.price}</td>
    </tr>
  );
};

export default CartItem;
