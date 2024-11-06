import React from 'react';
import '../pages/ChallengeDetail.css';
import challengeIcon from '../assets/clothes-icon.png';

function ChallengeStats() {
  return (
    <section className="challenge-stats">
      <h3>Lanjutkan Barter</h3>
      <div className="challenge-card">
      <img src={challengeIcon} alt="Challenge Icon" className="challenge-img" />
        <div className="challenge-details">
          <h4>Tantangan 7 Hari Mengurangi Sampah Fashion</h4>
          <p>20 Barter Poin</p>
          <div className="progress-container">
            <progress value="0" max="10"></progress>
            <span>0 / 10</span>
          </div>
          <button className="challenge-button">Ikuti Tantangan</button>
        </div>
      </div>
    </section>
  );
}

export default ChallengeStats;
