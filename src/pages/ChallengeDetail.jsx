import React from "react";
// import ChallengeStats from '../components/ChallengeStats';
import styles from "../pages/ChallengeDetail.module.css";

function ChallengeDetail() {
  const handleStartChallenge = () => {
    alert("Tantangan telah dimulai!");
  };

  return (
    <div className="{styles.challenge-container}">
      <main className="{styles.challenge-main-content}">
        <section className="{styles.challenge-detail}">
          <h2>Tantangan 7 Hari Mengurangi Sampah Fashion</h2>
          <p>
            Ambil bagian dalam tantangan 7 hari untuk mengurangi sampah fashion.
            Anda bisa mendapatkan poin setiap kali berhasil menyelesaikan
            langkah kecil dalam tantangan ini.
          </p>
          <div className="{styles.challenge-description}">
            <p>
              <strong>Durasi:</strong> 7 Hari
            </p>
            <p>
              <strong>Target:</strong> Mengurangi Sampah Fashion
            </p>
            <p>
              <strong>Hadiah:</strong> 50 Barter Poin dan Medali "Eco
              Fashionista"
            </p>
          </div>
          <button
            className="{styles.challenge-button}"
            onClick={handleStartChallenge}
          >
            Ikuti Tantangan
          </button>
        </section>
      </main>

      {/* <ChallengeStats /> */}
    </div>
  );
}

export default ChallengeDetail;
