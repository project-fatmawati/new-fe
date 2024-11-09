import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Katalog from "./pages/Katalog";
import DetailProduk from "./pages/DetailProduk";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ChallengeDetail from "./pages/ChallengeDetail";
import { AuthProvider } from "./context/AuthContext";
// import Footer from "./component/Footer";
// import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Daftar from "./pages/Register";
// import LandingPage from './pages/LandingPage';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";
import PengaturanAkun from "./pages/PengaturanAkun";
import Event from "./pages/Event";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/Dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="Riwayat" element={<RiwayatTransaksi />} />
            <Route path="Akun" element={<PengaturanAkun />} />
            <Route path="Event" element={<Event />} />
          </Route>

          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/Katalog" element={<Katalog />} />
          <Route path="/DetailProduk" element={<DetailProduk />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ChallengeDetail" element={<ChallengeDetail />} />

        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App;
