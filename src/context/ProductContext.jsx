import React, { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext ({
  products: [],
  getProductById: () => {},
    productDetail: null,

});



export function ProductProvider ({children}) {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);


  const getProducts = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    } 
  };

  const getProductById = async (id) => {
    try {
      const url = `https://fakestoreapi.com/products/${id}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setProductDetail(data);
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getProducts ();
  } , []);

  return (
    <ProductContext.Provider value={{products, getProductById, productDetail}}>{children}</ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
