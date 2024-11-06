import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo-nav.png';
import Icon from '../assets/clothes-icon.png'; // Pastikan path ini benar

function Navbar() {
  return (
    <nav className="bg-white px-4 py-3 shadow-md font-sans relative">
      <div className="container mx-auto flex items-center justify-between">
        <img src={Logo} alt="BarterStyle Logo" className="h-12" />
      </div>
    </nav>
  );
}

function Register() {
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          {/* Signup Form */}
          <div className="text-center mb-6">
            <img src={Icon} alt="Logo BarterStyle" className="w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold">Pendaftaran Akun</h2>
            <p className="text-gray">Yuk, daftarkan akunmu sekarang juga!</p>
            <div className="mt-4 mb-6 border-t-2 border-gray"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray">Nama Depan *</label>
              <input
                type="text"
                id="first-name"
                placeholder="Nama Depan"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Nama Belakang *</label>
              <input
                type="text"
                id="last-name"
                placeholder="Nama Belakang"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="email-signup" className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                id="email-signup"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor WhatsApp *</label>
              <input
                type="text"
                id="phone"
                placeholder="Nomor WhatsApp"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat *</label>
              <input
                type="text"
                id="address"
                placeholder="Alamat"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="password-signup" className="block text-sm font-medium text-gray-700">Password *</label>
              <input
                type="password"
                id="password-signup"
                placeholder="Minimal 6 karakter, 1 huruf besar, 1 huruf kecil, dan 1 angka"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Konfirmasi Password *</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Konfirmasi Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
              {errorMessage && <p className="text-red text-sm mt-2">{errorMessage}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
                className="form-checkbox h-4 w-4 text-cyan border-gray rounded"
              />
              <span className="text-sm text-gray">Saya setuju dengan <Link to="#" className="text-cyan">Syarat & Ketentuan</Link> dan <Link to="#" className="text-cyan">Kebijakan Privasi</Link></span>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue border-gray rounded"
              />
              <span className="text-sm text-gray">Saya ingin berlangganan Newsletter.</span>
            </div>

            <button type="submit" className="w-full bg-teal text-white font-bold py-2 rounded hover:bg-cyan transition duration-200">Daftar</button>
          </form>

          <p className="text-center mt-4 text-sm text-gray">Sudah punya akun? <Link to="/login" className="text-cyan">Masuk Sekarang</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
