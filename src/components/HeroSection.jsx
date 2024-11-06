import React from 'react';
import './HeroSection.css';
import Hero from '../assets/hero-image.png';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="banner-text col-12 col-lg-7" data-aos="fade-up" data-aos-duration="2000">
                        <h1 className="text-white fw-bold" id="hero-user">
                            Rajanya Barter Pakaian,<br /> Siap Tukaran.
                        </h1>
                        <p className="text-black pt-4">“Jadilah bagian dari Gerakan Fashion Berkelanjutan. Tukarkan Pakaianmu, Perbarui Gaya, dan Selamatkan Bumi.”</p>
                        <button type="button" id="btn-banner">Mulai Tukar</button>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-end">
                            <img src={Hero} className="hero-img" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
