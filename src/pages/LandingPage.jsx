import HeroSection from "../components/Landingpage/HeroSection";
import FAQ from "../components/Landingpage/FAQ";
import RecentProduct from "../components/Landingpage/RecentProduct";
import Header from "../components/Layout/Header";
import Newsletter from "../components/Landingpage/Newsletter";
import {ProductProvider} from '../context/ProductContext'
import ReviewSection from "../components/Landingpage/ReviewSection";

function HomePage() {
  return (
    <ProductProvider>
      <div>
        <HeroSection />
        <Header
          title="Recent Products"
          description="Ambillah Bagian dari Gerakan Sustainability Fahion dengan Menukarkan Pakaian Anda Sekarang"
        />
        <RecentProduct />
        <ReviewSection/>
        <FAQ />
        <Newsletter />
      </div>
    </ProductProvider>
  );
}

export default HomePage;
