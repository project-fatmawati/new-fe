import React from "react";
import { Link } from "react-router-dom";


const TentangKami = () => {
  return (
    <>
    <div className="w-full p-[80px] text-center bg-cyan">
    <h1 className="text-xl">
      <Link to={`/`}>Home</Link> / Tentang Kami
    </h1>
  </div>
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">

      <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
      <p className="text-gray mb-8 text-lg">
        BarterStyle adalah sebuah platform online yang menghubungkan siapapun yang peduli lingkungan. Kami percaya bahwa fashion bisa berkelanjutan. Dengan BarterStyle, kamu bisa bertukar pakaian bekasmu dengan orang lain, mengurangi limbah pakaian, dan menemukan gaya baru tanpa harus membeli baju baru.
      </p>
      <div className="">
        <details className="bg-gray-100 p-2 rounded-lg">
          <summary className="text-xl font-semibold cursor-pointer">VISI BarterStyle</summary>
          <p className="mt-2 text-gray-600">Menjadi platform terdepan di Indonesia yang memfasilitasi gaya hidup berkelanjutan melalui pertukaran pakaian bekas, menciptakan komunitas yang peduli lingkungan dan mendorong ekonomi sirkular di industri fashion.</p>
        </details>
        <details className="bg-gray-100 p-2 rounded-lg">
          <summary className="text-xl font-semibold cursor-pointer">MISI BarterStyle</summary>
          <p className="mt-2 text-gray">Misi detail dari BarterStyle akan disertakan di sini.</p>
        </details>
      </div>
    </section>
    </>
  );
};

export default TentangKami;
