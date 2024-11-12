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


  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/user/2'); // Replace with your API endpoint
      const data = await response.json();
      console.log(data);
      setOrder((prevState) => ({ ...prevState, products: data }));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Handle successful addition (e.g., update UI with cart count)
      } else {
        console.error('Error adding to cart:', await response.text());
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <OrderContext.Provider value={{ order, addToCart}}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);