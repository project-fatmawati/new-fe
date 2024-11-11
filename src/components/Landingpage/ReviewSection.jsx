import React from 'react';
import Header from '../Layout/Header';

// Data dummy untuk review
const reviews = [
    {
        name: 'Jenifer Putri',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: 'Karlina Zalora',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Putri Karamel',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        name: 'Zaki Iskandar',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        name: 'Della Agnesia',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    },    {
        name: 'Fathir Sobri',
        rating: 4,
        comment: 'Produknya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    // Tambahkan data review lainnya di sini
];

// ... (bagian atas kode sama)

function ReviewSection() {
    return (
        <section className="container mx-auto py-12">
            <Header title="Ulasan Member" description="Ribuan Member telah mempercayai Barterstyle" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-cyan p-6 rounded-lg shadow-md ">
                        <div className="flex items-center mb-4">
                            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                            <div>
                                <h3 className="text-xl font-bold">{review.name}</h3>
                                <div className="flex items-center">
                                    {/* Bintang rating */}
                                    <div className="flex">
                                        {/* ... (bagian bintang rating sama) */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ReviewSection;