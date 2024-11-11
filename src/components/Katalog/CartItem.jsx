import React from "react";
import shirt from "../../assets/shirt.png";

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
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <span className="mx-2">{item.quantity}</span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
