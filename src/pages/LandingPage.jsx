import React from 'react';
import HeroSection from '../components/HeroSection';
// import ProductRecommendation from '../components/ProductRecommendation'
import Faq from '../components/Faq'
import Newsletter from '../components/Newsletter'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecentProduct from '../components/RecentProduct';
import Header from '../components/Header';

function LandingPage() {
  return (
    <main className="landing-page bg-gray">
      <Navbar/>
      <HeroSection />
      {/* <ProductRecommendation /> */}
      <Header title="Recent Products" description="Ambillah Bagian dari Gerakan Sustainability Fahion dengan Menukarkan Pakaian Anda Sekarang"/>
      <RecentProduct/>
      <Faq />
      <Newsletter />
      <Footer/>
    </main>
  );
}

export default LandingPage;
