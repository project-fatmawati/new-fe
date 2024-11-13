// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { useAuth } from './AuthContext';
// import { useProduct } from './ProductContext';
// const OrderContext = createContext();

// export function OrderProvider({ children }) {
//   const [order, setOrder] = useState(
//     // {
//     //   user : null,
//     //   products: [],
//     // }
//   );
  
//   const { user } = useAuth();
//   const { products } = useProduct();

//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await fetch('https://fakestoreapi.com/carts/user/2'); // Replace with your API endpoint
//   //     const data = await response.json();
//   //     console.log(data);
//   //     setOrder((prevState) => ({ ...prevState, products: data }));
//   //   } catch (error) {
//   //     console.error('Error fetching products:', error);
//   //   }
//   // };

//   const addToCart = async (product) => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/carts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(product),
//       });

//       if (response.ok) {
//         // Handle successful addition (e.g., update UI with cart count)
//       } else {
//         console.error('Error adding to cart:', await response.text());
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

// // ... (omitted for brevity)

// useEffect(() => {
//   const storedOrder = localStorage.getItem('order');
//   if (storedOrder) {
//     try {
//       const parsedOrder = JSON.parse(storedOrder);
//       setOrder(parsedOrder);
//     } catch (error) {
//       console.error('Error parsing stored order:', error);
//       // Handle the error, e.g., log it or display an error message
//     }
//   } else {
//     setOrder({ user, products: [] });
//   }

//   localStorage.setItem('order', JSON.stringify(order));
// }, [order, user]);

  
//   return (
//     <OrderContext.Provider value={{ order, setOrder, addToCart}}>
//       {children}
//     </OrderContext.Provider>
//   );
// }

// export const useOrder = () => useContext(OrderContext);