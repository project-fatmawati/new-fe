import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Pastikan file CSS terletak di folder yang benar
import Logo from '../assets/Logo-nav.png';
import ClothesIcon from '../assets/clothes-icon.png'; // Pastikan path ini benar

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Password dan konfirmasi password tidak cocok!');
      return;
    }

    // Simpan data pengguna ke localStorage
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email]) {
      setErrorMessage('Email sudah terdaftar!');
      return;
    }

    users[email] = { firstName, lastName, phone, address, password };
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran berhasil!');
    navigate("/login"); // Redirect ke halaman login
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo BarterStyle" />
            </Link>
          </div>
        </div>
      </header>

      <div className="form-container">
        {/* Signup Form */}
        <div id="signupDiv" className="form-content">
          <div className="form-logo">
            <img src={ClothesIcon} alt="Logo BarterStyle" />
          </div>
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
          <div className="separator"></div>
          <form id="signupForm" onSubmit={handleSubmit}>
            <label htmlFor="first-name">Nama Depan *</label>
            <input type="text" id="first-name" placeholder="Nama Depan" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            
            <label htmlFor="last-name">Nama Belakang *</label>
            <input type="text" id="last-name" placeholder="Nama Belakang" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            
            <label htmlFor="email-signup">Email *</label>
            <input type="email" id="email-signup" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label htmlFor="phone">Nomor WhatsApp *</label>
            <input type="text" id="phone" placeholder="Nomor WhatsApp" required value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label htmlFor="address">Alamat *</label>
            <input type="text" id="address" placeholder="Alamat" required value={address} onChange={(e) => setAddress(e.target.value)} />
            
            <label htmlFor="password-signup">Password *</label>
            <input type="password" id="password-signup" placeholder="Minimal 6 karakter, 1 huruf besar, 1 huruf kecil, dan 1 angka" required value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <label htmlFor="confirm-password">Konfirmasi Password *</label>
            <input type="password" id="confirm-password" placeholder="Konfirmasi Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            <div className="input-checkbox mb-3">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" required />
                <span className="syarat">Saya setuju dengan <Link to="#">Syarat & Ketentuan</Link> dan <Link to="#">Kebijakan Privasi</Link></span>
              </div>
            </div>
              
            <div className="input-checkbox mb-3">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" />
                <span className="subscription">Saya ingin berlangganan Newsletter.</span>
              </div>
            </div>

            <button type="submit" className="signup-btn">Daftar</button>
          </form>
          <p className="login-link">Sudah punya akun? <Link to="/login">Masuk Sekarang</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
