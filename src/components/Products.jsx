// import React from 'react';
// import './Products.css';
// import img1 from '../assets/6.png'; 
// import img2 from '../assets/7.png';
// import img3 from '../assets/8.png';
// import img4 from '../assets/5.png';
// import img5 from '../assets/6.png'; 
// import img6 from '../assets/7.png';
// import img7 from '../assets/8.png';
// import img8 from '../assets/5.png';
// import img9 from '../assets/6.png';

// function Products() {
//   const productData = [
//     { id: 1, imgSrc: img1, title: "Baju Pendek", location: "Jakarta" },
//     { id: 2, imgSrc: img2, title: "Levis Panjang", location: "Jakarta" },
//     { id: 3, imgSrc: img3, title: "Jaket Levis", location: "Jakarta" },
//     { id: 4, imgSrc: img4, title: "Jaket Kulit", location: "Jakarta" },
//     { id: 5, imgSrc: img5, title: "Baju Pendek", location: "Jakarta" },
//     { id: 6, imgSrc: img6, title: "Levis Panjang", location: "Jakarta" },
//     { id: 7, imgSrc: img7, title: "Jaket Levis", location: "Jakarta" },
//     { id: 8, imgSrc: img8, title: "Jaket Kulit", location: "Jakarta" },
//     { id: 9, imgSrc: img9, title: "Baju Pendek", location: "Jakarta" },
//   ];

//   const handleDetailClick = (product) => {
//     console.log(`Lihat detail untuk ${product.title}`);
//     // Implementasikan navigasi ke halaman detail produk
//   };

//   return (
//     <div className="container text-center py-5">
//       <h2 className="text-dark fw-bold text-black pb-2">Tukaran Pakaian Yuk.</h2>
//       <p className="pb-5 h4">"Ambil Bagian dari Gerakan Sustainability Fashion dengan Menukarkan Pakaian Anda Sekarang"</p>
//       <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
//         {productData.map((product) => (
//           <div className="card-katalog col" key={product.id}>
//             <div className="card" style={{ width: '18rem' }}>
//               <img src={product.imgSrc} className="card-img-top" alt={product.title} />
//               <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text" style={{ fontSize: '15px' }}>Location: {product.location}</p>
//               <button onClick={() => handleDetailClick(product)} id="btn-product">Lihat Detail</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col text-center">
//             <button type="button" id="btn-katalog">Lihat Katalog BarterStyle</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;
