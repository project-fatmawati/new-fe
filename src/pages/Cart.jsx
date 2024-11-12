import CartItem from "../components/Katalog/CartItem";
import { Link } from "react-router-dom";
import { useOrder } from '../context/OrderContext'

const Cart = () => {
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Baju Olahraga Gym Senam Zumba Yoga Wanita Kaos",
  //     price: 0,
  //     quantity: 1,
  //     color: "Grey",
  //     size: "M",
  //   },

    
  //   // Add other cart items here
  // ];
  const { order } = useOrder();

  return (
    <>
      <div className="w-full p-[80px] text-center bg-cyan">
        <h1 className="text-xl">
          <Link to={`/`}>Home</Link> / Keranjang Belanja
        </h1>
      </div>

      <div className="container mx-auto py-[100px]">
        {" "}
        {/* Added padding for responsiveness */}
        <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {" "}
          {/* Responsive table container */}
          <table className="w-full border-collapse sm:table">
            <thead className=" bg-mustard text-xl">
              <tr>
                <th className="py-2 px-4 text-left">Produk</th>
                <th className="py-2 px-4 text-center ">Qty</th>
              </tr>
            </thead>
            <tbody>
            {order.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
            </tbody>
          </table>
          <div className="mt-8 sm:mt-0 w-full sm:w-1/2 border p-5">
            <h2 className="text-xl font-bold mb-4">Total Keranjang</h2>
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
              <button className="bg-slate-blue hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                <Link to="/Payment">PROCEED TO CHECKOUT</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
