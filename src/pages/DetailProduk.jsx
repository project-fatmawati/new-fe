import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useProduct } from "../context/ProductContext";
import { useState, useEffect } from 'react';
import { useOrder } from '../context/OrderContext'
import { useNavigate } from "react-router-dom";

function DetailProduk() {
  const { isLoggedIn } = useAuth();
  const { productId } = useParams();
  const { getProductById, productDetail } = useProduct();
  const { addToCart} = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(productId);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (isLoggedIn) {
      // Tambahkan produk ke keranjang jika pengguna sudah login
      addToCart(productDetail);
      // ...
    } else {
      // Redirect ke halaman login jika belum login
      navigate('/login');
    }
  };


  // const handleAddToCart = () => {
  //     addToCart(productDetail);
  //     navigate('/productDtail')
  //   }


  return (
    <>
      <div className="w-full flex justify-center p-[80px] bg-cyan">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Detail Product
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-[100px] pb-[100px]">
        {productDetail ? (
          <>
            <div className="md:w-[40%]">
              <div className="w-full md:w-1/2 mx-auto border flex justify-center">
                <img
                  className="w-[full] h-[full] object-cover rounded-lg p-3"
                  src={productDetail.image}
                  alt={productDetail.title}
                />
              </div>
            </div>
            <div className="md:w-[60%] pr-[30px]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">{productDetail.title}</h1>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                {productDetail.description}
              </p>
              <p className="text-lg font-bold">
                Size: <span className="font-normal">M</span>
              </p>
              <p className="text-lg font-bold mb-4">
                Colors: <span className="font-normal ">Merah dan Hitam</span>
              </p>
              <div className="flex flex-col gap-4 mb-4">
                <button className="w-[50%] py-4 bg-black hover:bg-mustard duration-300 text-white font-bold text-xl hover:text-black font-titleFont">
                <Link to="/Cart" onClick={() => handleAddToCart(productDetail)}>Add to Cart</Link>
                </button>
                <button className="w-[50%] py-4 bg-teal-500 hover:bg-cyan duration-300 border text-black font-bold text-xl hover:text-black font-titleFont" onClick={() => toggleLike(productDetail.id)}>
                  Add to Wishlist
                </button>
              </div>
              <p className="text-md">
                Categories:{" "}
                <span className="font-bold">
                  Spring collection, Streetwear, Women
                </span>
              </p>
            </div>
          </>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </>
  );
}

export default DetailProduk;
