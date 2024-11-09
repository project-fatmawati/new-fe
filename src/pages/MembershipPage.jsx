import React from 'react';
import { useNavigate } from 'react-router-dom';  // Pastikan ini ada
import style from './membershipPage.module.css'


function MembershipPage() {
  const navigate = useNavigate();

  const handleJoinClick = (plan) => {
    navigate(`/payment/${plan}`);
  };

  return (
    <div className="membership-page">
      <h1>Member BarterStyle</h1>
      <p>MemberStyle menyediakan pilihan jenis membership, Member Gratis dan Member Pro. Adapun ketentuannya sebagai berikut :</p>
      
      <div className="membership-info">
        {/* Member Gratis Section */}
        <div className="member-free">
          <h2>Member Gratis</h2>
          <p>Member gratis ialah pengguna yang sudah memiliki akun di BarterStyle.</p>
          <h3>Keuntungan:</h3>
          <p>Member Gratis dapat langsung menikmati fitur-fitur dasar BarterStyle seperti :</p>
          <ul>
            <li>Melakukan transaksi tukar ke BarterStyle</li>
            <li>Mencari dan menemukan pakaian yang ingin ditukar</li>
          </ul>
          <h4>Batasan:</h4>
          <ul>
            <li>Jumlah Tukar: Member Gratis hanya mendapatkan maksimal 2 kali tukar pakaian.</li>
            <li>Akses Fitur: Member Gratis tidak memiliki akses ke semua fitur BarterStyle.</li>
          </ul>
        </div>

        {/* Member Pro Section */}
        <div className="member-pro">
          <h2>Member Pro BarterStyle</h2>
          <p>Member Pro ialah pengguna yang sudah memiliki akun dan melakukan pendaftaran sebagai member pro.</p>
          <h3>Keuntungan:</h3>
          <ul>
            <li>Tanpa Batas: Nikmati kebebasan bertukar pakaian tanpa batasan jumlah transaksi.</li>
            <li>Akses Eksklusif: Dapatkan akses ke berbagai fitur premium seperti:</li>
            <ul>
              <li>Koleksi Eksklusif: Akses lebih dulu ke koleksi pakaian terbaru, bahan premium, dan tingkat kecacatan maksimal 20%.</li>
              <li>Prioritas Verifikasi: Pakaian Anda akan diproses lebih cepat.</li>
              <li>Poin Loyalitas: Kumpulkan poin setiap kali melakukan transaksi dan tukarkan dengan hadiah menarik dari BarterStyle.</li>
            </ul>
          </ul>
          <p>Biaya: Untuk menikmati semua keuntungan sebagai Member Pro, pilih salah satu opsi di bawah ini.</p>
        </div>
      </div>

      {/* Membership Options */}
      <div className="membership-options">
        <div className="membership-card">
          <h3>Member Pro 3 Bulan</h3>
          <p>Rp. 60.000</p>
          <ul>
            <li>Prioritas Verifikasi Tukar</li>
            <li>Dapat Kuota tukar lebih dari 2.</li>
            <li>Dapat akses Koleksi Pakaian terbaru, bahan premium dan tingkat kecacatan maksimal 20%</li>
            <li>Dapat Menikmati akses wishlist</li>
            <li>Mendapatkan gratis 1 pakaian dari BarterStyle jika sudah memenuhi 10 medali dalam 3 bulan</li>
          </ul>
          <button onClick={() => handleJoinClick('3 Bulan')}>Join Member</button>
        </div>
        
        <div className="membership-card">
          <h3>Member Pro 6 Bulan</h3>
          <p>Rp. 100.000</p>
          <ul>
            <li>Prioritas Verifikasi Tukar</li>
            <li>Dapat Kuota tukar lebih dari 2.</li>
            <li>Dapat akses Koleksi Pakaian terbaru, bahan premium dan tingkat kecacatan maksimal 20%</li>
            <li>Dapat Menikmati akses wishlist</li>
            <li>Mendapatkan gratis 1 pakaian dari BarterStyle jika sudah memenuhi 10 medali dalam 3 bulan</li>
            <li>Gratis Event Barter Offline 1 kali</li>
          </ul>
          <button onClick={() => handleJoinClick('6 Bulan')}>Join Member</button>
        </div>
      </div>
    </div>
  );
}

export default MembershipPage;
