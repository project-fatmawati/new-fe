import React from "react";


const CartItem = ({product}) => {

  return (
    <tr>
      <td className="py-2">
        <div className="flex items-center gap-3">
          <img className="w-[150px] h-[150px]" src={product.image} alt={product.title} />
          <div>
            <p className="text-lg">{product.title}</p>
            <p className="text-lg">Warna: </p>
            <p className="text-lg">Ukuran: </p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <span className="mx-2">1</span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
