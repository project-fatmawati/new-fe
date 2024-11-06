// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products'; 
// import FAQ from '../components/FAQ';

function HomePage() {
    return (
        <div>
            <HeroSection />
            <Products />
            {/* <FAQ /> */}
        </div>
    );
}

export default HomePage;
