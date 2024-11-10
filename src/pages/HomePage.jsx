
import HeroSection from "../components/HeroSection";
import FAQ from '../components/FAQ';
import RecentProduct from "../components/RecentProduct";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Header
        title="Recent Products"
        description="Ambillah Bagian dari Gerakan Sustainability Fahion dengan Menukarkan Pakaian Anda Sekarang"
      />
      <RecentProduct />
      <FAQ />
      <Newsletter/>
    </div>
  );
}

export default HomePage;
