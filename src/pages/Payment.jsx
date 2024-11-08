import { Link } from "react-router-dom";
import React, { useState } from "react";
import bcaLogo from "../assets/bcaLogo.png";
import briLogo from "../assets/briLogo.png";
import bniLogo from "../assets/bniLogo.png";
import mandiriLogo from "../assets/mandiriLogo.png";
import danaLogo from "../assets/danaLogo.png";
import shopeepay from "../assets/shopeepay.png";
import visaLogo from "../assets/visaLogo.png";
import masterCard from "../assets/masterCard.png";
import PopupPayment from "../components/PopupPayment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Payment() {
  // const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handlePlaceOrder = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar/>
      <h1 className="text-center p-[80px] font-medium text-4xl bg-cyan"> Hello, Rika Kamila!</h1>
      <div className="container mx-auto px-4 pt-[80px] pb-[100px]">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <form className="space-y-4 pb-3">
          <div>
            <label className="block text-xl ">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xl ">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300  shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xl ">Handphone</label>
            <input
              type="tel"
              id="phone"
              className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xl ">Shipping Address</label>
            <textarea
              id="address"
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
            ></textarea>
          </div>
        </form>
        <br />

        <div className="mt-8">
          <div className="border p-5 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2 p-3">Metode Pembayaran</h3>
            <div className="space-y-4">
              {/* Payment method options */}
              <div className="flex justify-between items-center border p-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankTransfer"
                    id="bankTransfer"
                  />
                  <label className="ml-2 text-lg">Bank Transfer</label>
                </div>
                <div className="flex flex-wrap gap-5 sm:items-center ">
                  <img className="h-[20px] w-[40px] " src={bcaLogo} />
                  <img className="h-[20px] w-[60px] " src={briLogo} />
                  <img className="h-[20px] w-[40px] " src={bniLogo} />
                  <img className="h-[20px] w-[50px]" src={mandiriLogo} />
                </div>
              </div>
              <div className="flex justify-between items-center border p-2">
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    // checked={paymentMethod === 'disneyGiftCard'}
                    // onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="ml-2 text-lg">Credit Card</label>
                </div>
                <div className="flex gap-2 pr-5">
                  <img className="h-[20px] w-[35px]" src={visaLogo} />
                  <img className="h-[25px] w-[45px]" src={masterCard} />
                </div>
              </div>
              <div className="flex justify-between items-center border p-2">
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="E-Wallet"
                    // checked={paymentMethod === 'disneyGiftCard'}
                    // onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="ml-2 text-lg">E-Wallet</label>
                </div>
                <div className="flex gap-2 pr-5">
                  <img className="h-[25px] w-[40px]" src={shopeepay} />
                  <img className="h-[25px] w-[40px]" src={danaLogo} />
                </div>
              </div>
              <div>
                <h3>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </h3>
                <div className="flex flex-col justify-center gap-4">
                  <div className="flex py-3">
                    <input type="checkbox" className="mr-2" />
                    <label for="terms">
                      I have read and agree to the website terms and conditions
                    </label>
                  </div>

                  <button
                    className="w-full text-xl sm:w-auto bg-black text-white font-bold py-3 px-4 rounded-full hover:bg-gray-800"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                  <PopupPayment
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                  />

                  <Link
                    to="/Cart"
                    className="text-xl text-gray-500 hover:underline text-center"
                  >
                    « Back to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Payment;
