import React from "react";

function ChallengeDetail({ showModal, handleCloseModal }) {

  return (
    <div className="{styles.challenge-container}">
      {showModal && (
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
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Tutup
            </button>
        </section>
      </main>
)}
    </div>
  );
}
export default ChallengeDetail;
