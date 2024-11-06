import React from 'react';
import './Footer.css';
import Logo from '../assets/Logo-nav.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="YanStore Logo" className="footer-logo-img" />
          <p>
          Sebuah platform yang mengajak Anda untuk berpartisipasi dalam revolusi fashion berkelanjutan. Dengan BarterStyle, Anda dapat memperpanjang umur pakai pakaian Anda, mengurangi limbah fashion, dan menemukan gaya baru yang unik.
          </p>
          <p>info@barterstyle.com</p>
        </div>
        <div className="footer-links">
          <h3>Site Link</h3>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Keranjang</a></li>
            <li><a href="#">Tentang Kami</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Sosial Media</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Create by yanaudin | © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
