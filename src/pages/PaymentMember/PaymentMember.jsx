import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PaymentMember.module.css'


function PaymentMember() {
  const { plan } = useParams(); // Dapatkan plan dari URL
  const navigate = useNavigate();
  const [showBankOptions, setShowBankOptions] = useState(false);

  const handlePaymentSuccess = () => {
    alert('Pembayaran berhasil!');
    navigate('/'); // Redirect ke halaman lain setelah pembayaran berhasil.
  };

  const handlePaymentCancel = () => {
    navigate('/'); // Navigasi kembali jika pembayaran dibatalkan
  };

  const handleBankTransfer = () => {
    setShowBankOptions(true); // Tampilkan opsi bank
  };

  const handleSelectBank = (bank) => {
    alert(`Anda memilih transfer bank melalui ${bank}. Lanjutkan pembayaran.`);
    handlePaymentSuccess();
  };

  return (
    <div className={styles.paymentPage}>
      <h1>Pembayaran</h1>
      <p>Anda sedang memilih paket {plan}.</p>
      <p>Silakan pilih metode pembayaran di bawah ini:</p>

      {/* Metode pembayaran */}
      <div className={styles.paymentMethods}>
        <button onClick={handlePaymentSuccess}>Kartu Kredit</button>
        <button onClick={handleBankTransfer}>Transfer Bank</button>
      </div>

      {/* Conditional rendering untuk tombol bank di atas tombol "Batal" */}
      {showBankOptions && (
        <div className={styles.bankOptions}>
          <h3>Pilih Bank Anda</h3>
          <div className={styles.bankButtons}>
            <button onClick={() => handleSelectBank('Bank BCA')}>Bank BCA</button>
            <button onClick={() => handleSelectBank('Bank Mandiri')}>Bank Mandiri</button>
            <button onClick={() => handleSelectBank('Bank BNI')}>Bank BNI</button>
            <button onClick={() => handleSelectBank('Bank BRI')}>Bank BRI</button>
            <button onClick={() => handleSelectBank('Bank CIMB Niaga')}>Bank CIMB Niaga</button>
          </div>
        </div>
      )}

      {/* Tombol Batal */}
      <div className={styles.paymentMethods}>
        <button onClick={handlePaymentCancel}>Batal</button>
      </div>
    </div>
  );
}

export default PaymentMember;

