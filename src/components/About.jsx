import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
      <p className="text-gray mb-8">
        BarterStyle adalah sebuah platform online yang menghubungkan siapapun yang peduli lingkungan. Kami percaya bahwa fashion bisa berkelanjutan. Dengan BarterStyle, kamu bisa bertukar pakaian bekasmu dengan orang lain, mengurangi limbah pakaian, dan menemukan gaya baru tanpa harus membeli baju baru.
      </p>
      <div className="space-y-4">
        <details className="bg-gray-100 p-4 rounded-lg">
          <summary className="text-lg font-semibold cursor-pointer">VISI BarterStyle</summary>
          <p className="mt-2 text-gray-600">Menjadi platform terdepan di Indonesia yang memfasilitasi gaya hidup berkelanjutan melalui pertukaran pakaian bekas, menciptakan komunitas yang peduli lingkungan dan mendorong ekonomi sirkular di industri fashion.</p>
        </details>
        <details className="bg-gray-100 p-4 rounded-lg">
          <summary className="text-lg font-semibold cursor-pointer">MISI BarterStyle</summary>
          <p className="mt-2 text-gray">Misi detail dari BarterStyle akan disertakan di sini.</p>
        </details>
      </div>
    </section>
  );
};

export default About;
