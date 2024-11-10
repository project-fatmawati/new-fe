
import HeroSection from "../components/HeroSection";
import ProductRecommendation from "../components/ProductRecommendation";
import FAQ from "../components/FAQ";
import Newsletter from '../components/Newsletter';

function LandingPage() {
  return (
    <main className="landing-page bg-gray">
      <HeroSection />
      <ProductRecommendation />
      <FAQ />
      <Newsletter />
    </main>
  );
}

export default LandingPage;
