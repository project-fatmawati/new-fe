import React from 'react';

function Newsletter() {
  return (
    <section className="py-12 bg-white1 text-center">
      <h2 className="text-2xl font-bold">Newsletter</h2>
      <p className="mt-2 text-gray">Dapatkan update terbaru dan penawaran menarik langsung ke email Anda.</p>
      <form className="mt-6 justify-center flex items-center space-x-2">
        <input type="email" placeholder="you@example.com" className="border p-2 rounded-md w-1/3" />
        <button type="submit" className="bg-mustard text-black p-2 rounded-md font-bold">Submit</button>
      </form>
    </section>
  );
}

export default Newsletter;
