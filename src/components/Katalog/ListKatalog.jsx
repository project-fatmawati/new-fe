import React from "react";
// import { useState, useEffect } from "react";
import { useProduct } from '../../context/ProductContext'
import ProductCard from "./ProductCard"

function ListKatalog() {

  const {products} = useProduct()

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ListKatalog;
