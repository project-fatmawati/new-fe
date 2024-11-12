import React from "react";
import { useProduct } from '../../context/ProductContext'
import { useAuth } from "../../context/AuthContext";
import ProductCard from './ProductCard'

function ListKatalog() {

  const {products} = useProduct();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <p className="text-center h-screen text-2xl">Please login to view products.</p>;
  }

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
