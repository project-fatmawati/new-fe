import React from 'react';
import { useOrder } from '../../context/OrderContext'
import CartItem from './CartItem'

const Cart = () => {
  const { order } = useOrder();

  // Check if there are any items in the cart before rendering
  if (order.products.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      {/* Add buttons for checkout or other actions */}
    </div>
  );
};

export default Cart;