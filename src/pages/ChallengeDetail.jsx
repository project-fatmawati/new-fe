import React from 'react';
import ChallengeStats from '../components/ChallengeStats';
import './ChallengeDetail.css'; // Gaya spesifik untuk halaman ini

function ChallengeDetail() {
  const handleStartChallenge = () => {
    alert('Tantangan telah dimulai!');
  };

  return (
    <div className="challenge-container">
      <main className="challenge-main-content">
        <section className="challenge-detail">
          <h2>Tantangan 7 Hari Mengurangi Sampah Fashion</h2>
          <p>
            Ambil bagian dalam tantangan 7 hari untuk mengurangi sampah fashion. Anda bisa mendapatkan
            poin setiap kali berhasil menyelesaikan langkah kecil dalam tantangan ini.
          </p>
          <div className="challenge-description">
            <p><strong>Durasi:</strong> 7 Hari</p>
            <p><strong>Target:</strong> Mengurangi Sampah Fashion</p>
            <p><strong>Hadiah:</strong> 50 Barter Poin dan Medali "Eco Fashionista"</p>
          </div>
          <button className="challenge-button" onClick={handleStartChallenge}>
            Ikuti Tantangan
          </button>
        </section>
      </main>

      {/* <ChallengeStats /> */}
    </div>
  );
}

export default ChallengeDetail;
