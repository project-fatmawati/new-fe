import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="user-info">
                <img src="user.png" alt="User" className="user-img" />
                <h3>User</h3>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Informasi Pribadi</a></li>
                    <li><a href="#">Katalog Baju</a></li>
                    <li><a href="#">Riwayat Transaksi</a></li>
                    <li><a href="#">Tantangan</a></li>
                    <li><a href="#">Pesan dan Notifikasi</a></li>
                    <li><a href="#">Pengaturan Akun</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
