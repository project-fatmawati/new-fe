
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Katalog from "./pages/Katalog";
import DetailProduk from "./pages/DetailProduk";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
// import ChallengeDetail from "./pages/ChallengeDetail";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Daftar from "./pages/Register";
import Navbar from "./components/Landingpage/Navbar";
import LayoutDashboard from './components/Layout/LayoutDashboard'
import Dashboard from "./pages/Dashboard";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";
import PengaturanAkun from "./pages/PengaturanAkun";
import Event from "./pages/Event";
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import Footer from "./components/Landingpage/Footer";
import MembershipPage from './pages/Membership/MembershipPage'
import PaymentMember from './pages/PaymentMember/PaymentMember'
import StylishShield from "./pages/StylishShield";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/tentang" element={<About/>} />
          <Route path="/membership" element={<MembershipPage />}/>
          <Route path="/paymentMember" element={<PaymentMember/>}/>
          <Route path="/stylishShield" element={<StylishShield/>}/>
          

          {/* Routes untuk Dashboard */}
          <Route path="/Dashboard" element={<LayoutDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="/Dashboard/Riwayat" element={<RiwayatTransaksi />} />
            <Route path="/Dashboard/Akun" element={<PengaturanAkun />} />
            <Route path="/Dashboard/Event" element={<Event />} />
            <Route path="/Dashboard/Logout" element={<Event />} />
            {/* <Route path="/Dashboard/ChallengeDetail" element={<ChallengeDetail />} /> */}
          </Route>

          
          <Route path="/Katalog" element={<Katalog />} />
          <Route path="/DetailProduk" element={<DetailProduk />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
          

        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App;
