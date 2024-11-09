import React from 'react';
import TransactionCard from './TransactionCard'
import Img1 from "../assets/shirt.png"
import Img2 from "../assets/shirt2.png"
import Img3 from "../assets/shirt3.png"

function TransactionHistory() {
  const transactions = [
    // {
    //   name: 'Brown Sweater',
    //   condition: 'Baik',
    //   message: 'Pakaian masih mulus, dan layak pakai',
    //   image: {shirt}, 
    //   points: 20,
    // },

    // {
    //     name: 'Brown Sweater',
    //     condition: 'Baik',
    //     message: 'Pakaian masih mulus, dan layak pakai',
    //     image: {shirt2}, 
    //     points: 20,
    //   },
    //   {
    //     name: 'Brown Sweater',
    //     condition: 'Baik',
    //     message: 'Pakaian masih mulus, dan layak pakai',
    //     image: {shirt3}, 
    //     points: 20,
    //   },
    //   {
    //     name: 'Brown Sweater',
    //     condition: 'Baik',
    //     message: 'Pakaian masih mulus, dan layak pakai',
    //     image: {shirt3}, 
    //     points: 20,
    //   },

      {
        id: 1,
        img: Img1,
        title: "Kemeja Blue Jeans",
        size : "M",
        color : "Blue",
        description:
          "Kondisi Pakaian 80% Baik, ada noda sedikit di belakang bawah",
          points: 20,
      },
      {
        id: 2,
        img: Img2,
        title: "Kemeja Salur",
        size : "L",
        color : "Navy dan White",
        description:
          "Kemeja baru dua kali dipakai pengguna dan agak tipis tapi masih 90% mulus",
          points: 20,
      },
      {
        id: 3,
        img: Img3,
        title: "Women shirt",
        size : "All Size",
        color : "Black dan White",
        description:
          "Kemeja berbahan katun masih 80% mulus, ada noda sedikit di bagian lengan kanan.",
          points: 20,
      },
    // ... data transaksi lainnya
  ];

  return (
    <div className="container mx-auto py-[50px] h-full pb-40">
      <h1 className="text-3xl font-bold mb-8">Riwayat Transaksi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} item={transaction} />
        ))}
      </div>
    </div>
  );
}

export default TransactionHistory;