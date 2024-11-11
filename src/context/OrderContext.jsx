import React, { createContext, useState, useEffect, useContext } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState({

    products: [],
    customer: {
      name: '',
      address: '',
    },
    paymentMethod: '',
    shippingAddress: '',
    status: 'pending',
    totalPrice: 0,
  });

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (product) => {
    // Logic untuk menambahkan produk ke array products
    setOrder((prevState) => ({
      ...prevState,
      products: [...prevState.products, product],
      // Update total harga
      totalPrice: prevState.totalPrice + product.price * product.quantity,
    }));
  };

  const removeFromCart = (productId) => {
    // Cari indeks produk yang akan dihapus
    const productIndex = order.products.findIndex((product) => product.id === productId);
  
    // Jika produk ditemukan
    if (productIndex !== -1) {
      // Buat array baru tanpa produk yang dihapus
      const newProducts = [...order.products];
      newProducts.splice(productIndex, 1);
  
      // Update state
      setOrder((prevState) => ({
        ...prevState,
        products: newProducts,
        // Update total harga
        totalPrice: prevState.totalPrice - order.products[productIndex].price * order.products[productIndex].quantity,
      }));
    }
  };


  
  return (
    <OrderContext.Provider value={{ order, addToCart, removeFromCart}}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);