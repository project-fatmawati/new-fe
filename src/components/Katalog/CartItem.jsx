import React from "react";
import { useOrder } from '../../context/OrderContext'


const CartItem = ({product}) => {

  const { removeFromCart } = useOrder();


  const handleRemove = () => {
    removeFromCart(product.id);
  };

  // Handle case where product might be undefined (for error handling)
  if (!product) {
    return null;
  }

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
