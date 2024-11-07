import React from 'react';
import Header from './Header';

function Newsletter() {
  return (
    <>
    <Header title="Newsletter" description="Dapatkan update terbaru dan penawaran menarik langsung ke email Anda." />
    <section className=" bg-white1 text-center">
      <form className="justify-center flex items-center space-x-2 pb-[100px]">
        <input type="email" placeholder="you@example.com" className="border p-2 rounded-md w-1/3" />
        <button type="submit" className="bg-mustard text-black p-2 rounded-md font-bold">Submit</button>
      </form>
    </section>
    </>
  );
}

export default Newsletter;
