import React from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Baju Olahraga Gym Senam Zumba Yoga Wanita Kaos",
      price: 0,
      quantity: 1,
      color: "Grey",
      size: "M",
    },
    // Add other cart items here
  ];

  return (
    <div className="container mx-auto py-8">
      {" "}
      {/* Added padding for responsiveness */}
      <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        {" "}
        {/* Responsive table container */}
        <table className="w-full border-collapse sm:table">
          <thead className="border bg-slate-200 text-xl">
            <tr>
              <th className="py-2 px-4 text-left">Produk</th>
              <th className="py-2 px-4 text-right">Harga</th>
              <th className="py-2 px-4 text-center ">Qty</th>
              <th className="py-2 px-4 text-right ">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        <div className="mt-8 sm:mt-0 w-full sm:w-1/2 border p-5">
          <h2 className="text-xl font-bold mb-4">Total Keranjang</h2>
          <div className="flex justify-between mb-2 text-lg">
            <span className="font-bold">Subtotal</span>
            <span>Rp. 0</span>
          </div>
          <div className="flex justify-between mb-2 text-lg">
            <span className="font-bold">Transaction Fee</span>
            <span>Rp. 5.000</span>
          </div>
          <div className="flex justify-between mb-2 text-lg">
            <span className="font-bold">Shipping</span>
            <span>Rp. 10.000</span>
          </div>
          <div className="flex justify-between mb-2 italic">
            <h2>
              Shipping Addres : Jl. Tegal Parang Selatan I, Mampang Prapatan,
              Kota Jakarta Selatan, DKI Jakarta, 12790.
            </h2>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-bold">TOTAL</span>
            <span className="font-bold">Rp 15.000</span>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
