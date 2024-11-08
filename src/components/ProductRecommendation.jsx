import React from 'react';
// import kaosPendek from '../assets/kaosPendek.png'
import hoodieAbu from '../assets/HoodieAbu.png';
import blouseWanita from '../assets/BlouseWanita.png';
import blouseShakila from '../assets/BlouseShakila.png';
import cardiganHitam from '../assets/CardiganHitam.png';
// import rokPlisket from '../assets/RokPlisket.png';
import jaketDenim from '../assets/JaketDenim.png';
import celanaBahan from '../assets/CelanaBahan.png';

function ProductRecommendation() {
  const products = [
    // { id: 1, name: 'Kaos Pendek', imgSrc: kaosPendek },
    { id: 2, name: 'Hoodie Abu', imgSrc: hoodieAbu },
    { id: 3, name: 'Blouse Wanita', imgSrc: blouseWanita },
    { id: 4, name: 'Blouse Shakila', imgSrc: blouseShakila },
    { id: 5, name: 'Cardigan Hitam', imgSrc: cardiganHitam },
    // { id: 6, name: 'Rok Plisket', imgSrc: rokPlisket },
    { id: 7, name: 'Jaket Denim', imgSrc: jaketDenim },
    { id: 8, name: 'Celana Bahan', imgSrc: celanaBahan },
  ];

  return (
    <section className="py-16 bg-white1 text-center">
      <h2 className="text-2xl font-bold">Rekomendasi Pakaian</h2>
      <p className="mt-2 text-gray">Ambil Bagian dari Gerakan Sustainability Fashion dengan Menukarkan Pakaian Anda Sekarang</p>
      <div className="grid grid-cols-4 gap-6 mt-8 px-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-48 object-contain rounded"
            />
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <button className="bg-teal text-white mt-4 px-4 py-2 rounded">Lihat Detail</button>
          </div>
        ))}
      </div>
      <button className="bg-mustard text-black mt-8 px-6 py-3 font-bold rounded">Lihat Katalog BarterStyle</button>
    </section>
  );
}

export default ProductRecommendation;
