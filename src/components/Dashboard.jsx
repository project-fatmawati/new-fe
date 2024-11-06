import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate(); // Inisialisasi useNavigate

    const handleChallengeClick = () => {
        navigate('/challenge-detail'); // Navigasi ke halaman detail tantangan
    };

    return (
        <div className="dashboard-container">
            <section className="dashboard-header">
                <h2>Halo, Yana Udin!</h2>
                <p>Mulai tukarkan baju bekasmu dan selamatkan lingkungan. Satu langkah kecil untuk bumi yang lebih hijau!</p>
                <div className="stats">
                    <div className="stat-box">
                        <h3>Total Barter</h3>
                        <p className="stat-value">10</p>
                        <p>Kali Barter</p>
                    </div>
                    <div className="stat-box">
                        <h3>Dampak Lingkungan</h3>
                        <p className="stat-value">10</p>
                        <p>Pohon Selamat</p>
                    </div>
                    <div className="stat-box">
                        <h3>Medali</h3>
                        <p className="stat-value">10</p>
                        <p>Pohon Selamat</p>
                    </div>
                </div>
            </section>

            <section className="dashboard-content">
                <h3>Lanjutkan Barter</h3>
                <div className="challenge-card">
                    <div className="challenge-info">
                        <div className="challenge-image"></div>
                        <div className="challenge-details">
                            <h4>Tantangan 7 Hari Mengurangi Sampah Fashion</h4>
                            <div className="barter-point">20 Barter Poin</div>
                            <div className="progress-bar">
                                <span>0 / 10</span>
                                <div className="progress">
                                    <div className="progress-fill" style={{ width: "0%" }}></div>
                                </div>
                                <span>0%</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-challenge" onClick={handleChallengeClick}>Ikuti Tantangan</button>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;

