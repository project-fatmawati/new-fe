import React from "react";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";

function SidebarFilter() {
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter(
          (product) =>
            product &&
            product.title &&
            product.title.toLowerCase().includes(value)
        );
        setFilteredProducts(results); // Update filteredProducts state
        console.log(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };


  return (
    <aside className="py-4 w-96">
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-semibold pb-3">Cari Pakaian</h3>
        <div className="relative">
        <FcSearch className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={input}
            placeholder="Search products..."
            onChange={(e) => handleChange(e.target.value)}
            className="w-full px-3 py-2 pl-8 border rounded-md focus:outline-none focus:ring focus:ring-mustard-400 sm:w-3/4 md:w-2/3 lg:w-1/2"
          />
        </div>
      </div>

      {/* Tampilkan hasil filter hanya jika ada input */}
      {input && (
        <ul className="list-disc space-y-2 pr-20">
          {filteredProducts.slice(0).map((product) => (
            <li key={product.id}>
              {/* Display product details here */}
              {product.title}
            </li>
          ))}
        </ul>
      )}

      <div className="pt-20">
        <h3 className="text-lg font-semibold">Filter by Color</h3>
        <div className="space-y-2">
          {/* Contoh tombol warna */}
          <button>White</button>
          {/* Tambahkan tombol warna lainnya di sini */}
        </div>

        <h3 className="text-lg font-semibold mt-4">Categories</h3>
        <div className="space-y-2">
          {/* Contoh tombol kategori */}
          <button>Kemeja (2)</button>
          {/* Tambahkan tombol kategori lainnya di sini */}
        </div>
        <h3 className="text-lg font-semibold mt-4">Sizes</h3>
        <div className="space-y-2">
          {/* Contoh tombol kategori */}
          <button>S (2)</button>
          {/* Tambahkan tombol kategori lainnya di sini */}
        </div>
      </div>
    </aside>
  );
}

export default SidebarFilter;
