import React, { createContext, useState, useEffect, useContext } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    user: null,
    // user: userId,
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
  
  // const [userId, setUserId] = useState(null);

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

// useEffect(() => {
//   if (userId) {
//     // Fetch user data based on userId
//     fetch(`your-api/users/${userId}`)
//       .then(response => response.json())
//       .then(userData => setOrder(prevState => ({ ...prevState, user: userData })))
//       .catch(error => console.error('Error fetching user data:', error));
//   }
// }, [userId]);

useEffect(() => {
  const storedOrder = localStorage.getItem('order');
  if (storedOrder) {
      const parsedOrder = JSON.parse(storedOrder);
      setOrder(parsedOrder);
  }
}, []);
  
  return (
    <OrderContext.Provider value={{ order, addToCart}}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);