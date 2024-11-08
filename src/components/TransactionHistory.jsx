import React from 'react';
import TransactionCard from './TransactionCard'
import shirt from '../assets/shirt.png'
import shirt2 from '../assets/shirt2.png'
import shirt3 from '../assets/shirt3.png'

function TransactionHistory() {
  const transactions = [
    {
      name: 'Brown Sweater',
      condition: 'Baik',
      message: 'Pakaian masih mulus, dan layak pakai',
      image: {shirt}, 
      points: 20,
    },

    {
        name: 'Brown Sweater',
        condition: 'Baik',
        message: 'Pakaian masih mulus, dan layak pakai',
        image: {shirt2}, 
        points: 20,
      },
      {
        name: 'Brown Sweater',
        condition: 'Baik',
        message: 'Pakaian masih mulus, dan layak pakai',
        image: {shirt3}, 
        points: 20,
      },
    // ... data transaksi lainnya
  ];

  return (
    <div className="container mx-auto py-[80px]">
      <h1 className="text-3xl font-bold mb-8">Riwayat Transaksi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} item={transaction} />
        ))}
      </div>
    </div>
  );
}

export default TransactionHistory;