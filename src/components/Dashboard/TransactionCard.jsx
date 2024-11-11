import React from 'react';

function TransactionCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 cursor-pointer">
      <img src={item.img} alt={item.title} className="rounded-md mb-4 w-36" />
      <h2 className="text-xl font-medium">{item.title}</h2>
      <p className="text-gray-500">Size : {item.size}</p>
      <p className="text-gray-500">Color : {item.color}</p>
      <p className="text-gray-500">Kondisi : {item.description}</p>
      <div className="text-green-500 font-bold pt-3 text-teal">{item.points} BarterPoin</div>
    </div>
  );
}

export default TransactionCard;