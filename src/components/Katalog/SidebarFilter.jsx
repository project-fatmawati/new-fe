import React from 'react';
import { useState } from 'react';

function SidebarFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleColorSelect = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleSizesSelect = (sizes) => {
    if (selectedCategories.includes(sizes)) {
      setSelectedSizes(selectedCategories.filter((c) => c !== sizes));
    } else {
      setSelectedSizes([...selectedSizes, sizes]);
    }
  };

  return (
    <aside className="bg-gray-100 p-4 w-72">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-3 py-2 border rounded-md"
        />
          <button className="bg-mustard  text-black font-bold py-2 px-2 rounded">
    Search
  </button>
      </div>

      <h3 className="text-lg font-semibold">Filter by Color</h3>
      <div className="space-y-2">
        {/* Contoh tombol warna */}
        <button
          className={`px-3 py-2 rounded-md ${selectedColors.includes('white') ? ' text-teal' : 'text-black'}`}
          onClick={() => handleColorSelect('white')}
        >
          White
        </button>
        {/* Tambahkan tombol warna lainnya di sini */}
      </div>

      <h3 className="text-lg font-semibold mt-4">Categories</h3>
      <div className="space-y-2">
        {/* Contoh tombol kategori */}
        <button
          className={`px-3 py-2 rounded-md ${selectedCategories.includes('Kemeja') ? ' text-teal' : 'text-black'}`}
          onClick={() => handleCategorySelect('Kemeja')}
        >
          Kemeja (2)
        </button>
        {/* Tambahkan tombol kategori lainnya di sini */}
      </div>
      <h3 className="text-lg font-semibold mt-4">Sizes</h3>
      <div className="space-y-2">
        {/* Contoh tombol kategori */}
        <button
          className={`px-3 py-2 rounded-md ${selectedSizes.includes('S') ? ' text-teal' : 'text-black'}`}
          onClick={() => handleSizesSelect('S')}
        >
          S (2)
        </button>
        {/* Tambahkan tombol kategori lainnya di sini */}
      </div>
    </aside>
  );
}

export default SidebarFilter;