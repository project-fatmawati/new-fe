import React from "react";
// import React, { useState } from 'react';
import bcaLogo from "../assets/bcaLogo.png";
import briLogo from "../assets/briLogo.png";
import bniLogo from "../assets/bniLogo.png";
import mandiriLogo from "../assets/mandiriLogo.png";
import danaLogo from "../assets/danaLogo.png";
import shopeepay from "../assets/shopeepay.png";
import visaLogo from "../assets/visaLogo.png";
import masterCard from "../assets/masterCard.png";

function BillingForm() {
  // const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
      <form className="space-y-4 pb-3">
        <div>
          <label htmlFor="username" className="block text-xl ">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xl ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300  shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xl ">
            Handphone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-xl ">
            Shipping Address
          </label>
          <textarea
            id="address"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 shadow-sm"
          ></textarea>
        </div>
      </form>
      <div>
        <br />

        <div className="border p-5 rounded">
          <h3 className="text-2xl font-bold mb-2 p-3">Metode Pembayaran</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border p-2">
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  // checked={paymentMethod === 'disneyGiftCard'}
                  // onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="bankTransfer" className="ml-2 text-xl">
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                <img
                  className="h-[20px] w-[60px] sm:w-[40px] sm:h-[16px]"
                  src={bcaLogo}
                />
                <img
                  className="h-[20px] w-[60px] sm:w-[40px] sm:h-[16px]"
                  src={briLogo}
                />
                <img
                  className="h-[20px] w-[60px] sm:w-[40px] sm:h-[16px]"
                  src={mandiriLogo}
                />
                <img
                  className="h-[20px] w-[50px] sm:w-[35px] sm:h-[14px]"
                  src={bniLogo}
                />
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
                <label htmlFor="bankTransfer" className="ml-2 text-xl">
                  Credit Card
                </label>
              </div>
              <div className="flex gap-2">
                <img className="h-[20px] w-[60px]" src={visaLogo} />
                <img className="h-[25px] w-[65px]" src={masterCard} />
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
                <label htmlFor="bankTransfer" className="ml-2 text-xl">
                  E-Wallet
                </label>
              </div>
              <div className="flex gap-2">
                <img className="h-[25px] w-[60px]" src={shopeepay} />
                <img className="h-[25px] w-[60px]" src={danaLogo} />
              </div>
            </div>
            <div>
              <h3>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </h3>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex py-3">
                  <input type="checkbox" className="mr-2" />
                  <label for="terms">
                    I have read and agree to the website terms and conditions
                  </label>
                </div>

                <button className="w-full text-xl sm:w-auto bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800">
                  PLACE ORDER
                </button>

                <a
                  href="#"
                  className="text-xl text-gray-500 hover:underline text-center"
                >
                  « Back to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingForm;
