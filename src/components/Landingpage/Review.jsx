import React from 'react';
import Header from '../Layout/Header';

// Data dummy untuk review
const reviews = [
    {
        name: 'Hilda medika',
        rating: 5,
        comment: 'Seneng barter disini, available terus tiap hari jadi ga usah nunggu event dulu deh.',
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
        name: 'Adelina Estemat',
        rating: 4,
        comment: 'Sangat membantu Gerakan Sustainability, semoga terus berkembang Barterstyle',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
        name: 'Josua Cabita',
        rating: 5,
        comment: 'Kondisi pakaian rata-rata diatas 80% jadi walaupun bekas pakai jadi seperti baru.',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Zaki inskandar',
        rating: 4,
        comment: 'Pakaian-pakaiannya bagus banget, sesuai dengan deskripsi.',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        name: 'Hilda Medika',
        rating: 5,
        comment: 'Sangat puas dengan kualitas bahannya! Jahitannya masih rapi dan kuat. Pasti akan barter lagi.',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    
    },
    {
        name: 'John Doe',
        rating: 4,
        comment: 'Pengirimannya cepat banget, cuma butuh waktu 2 hari sampai. Terima kasih!',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
];

function Review() {
    return (
        <>
        <Header title="Ulasan Pengguna" description="Ribuan Pengguna Barterstyle merasakan kemudahan pelayanan kami"  />
        <section className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-cyan p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">{review.name}</h3>
                                <div className="flex items-center">
                                    {/* Bintang rating (sesuaikan dengan library favorit Anda) */}
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < review.rating ? 'text-mustard' : 'text-white'}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Review;