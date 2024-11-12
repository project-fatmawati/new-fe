import React from 'react';

function ListEvent() {
  const handleClick = () => {
    alert('Maaf untuk saat ini event belum tersedia. Silakan coba lagi nanti.');
  };

  return (
    <div className="py-[300px] text-center justify-center">
      <h1 className="text-black font-bold text-2xl">Kamu Belum Mengikuti Event Barterstyle</h1>
      <p className="text-black text-lg pb-5">Gabunglah Event Barter demi mendukung Gerakan Sustainability Fashion</p>
      <button onClick={handleClick} className="bg-cyan p-2 border rounded-md cursor-pointer hover:bg-teal font-medium text-xl">JOIN EVENT</button>
    </div>
  );
}

export default ListEvent;