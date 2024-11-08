import React from "react";
import HeroSection from "../components/HeroSection";
import FAQ from '../components/FAQ';
import RecentProduct from "../components/RecentProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Header
        title="Recent Products"
        description="Ambillah Bagian dari Gerakan Sustainability Fahion dengan Menukarkan Pakaian Anda Sekarang"
      />
      <RecentProduct />
      <FAQ />
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default HomePage;
