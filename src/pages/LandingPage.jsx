import React from 'react';
import HeroSection from "../component/HeroSection";
import ProductRecommendation from "../component/ProductRecommendation";
import FAQ from "../component/FAQ";
import Newsletter from '../component/Newsletter';

function LandingPage() {
  return (
    <main className="landing-page bg-gray-100"> {/* You can add classes like bg-gray-100 for styling */}
      <HeroSection />
      <ProductRecommendation />
      <FAQ />
      <Newsletter />
    </main>
  );
}

export default LandingPage;
