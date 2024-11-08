import React from 'react';

function TransactionCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={item.image} alt={item.name} className="rounded-md mb-4" />
      <h2 className="text-lg font-medium">{item.name}</h2>
      <p className="text-gray-500">Kondisi: {item.condition}</p>
      <p className="text-gray-500">Pesan: {item.message}</p>
      <div className="text-green-500 font-bold">{item.points} BarterPoin</div>
    </div>
  );
}

export default TransactionCard;