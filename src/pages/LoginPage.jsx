import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Logo from '../assets/Logo-nav.png';
import ClothesIcon from '../assets/clothes-icon.png';

function LoginPage({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            localStorage.setItem('loggedInUser', email); // Simpan email pengguna
            handleLogin(email.split('@')[0]); // Mengambil nama dari email
            navigate("/"); // Arahkan kembali ke halaman utama setelah login
        } else {
            alert('Email dan password harus diisi!');
        }
    };

    return (
        <div>
            <header>
                <div className="{styles.header-container}">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo BarterStyle" />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="{styles.form-container}">
                <div className="{styles.form-content}">
                    <div className="{styles.form-logo}">
                        <img src={ClothesIcon} alt="Logo BarterStyle" />
                    </div>
                    <h2>Masuk ke Akun Anda</h2>
                    <form onSubmit={onLogin}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor="password">Password *</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <button type="submit" className="{styles.login-btn}">Login</button>
                    </form>
                    <p>Belum punya akun? <Link to="/register">Daftar Sekarang</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
