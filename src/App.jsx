import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Katalog from "./pages/Katalog";
import DetailProduk from "./pages/DetailProduk";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Homepage from "./pages/HomePage";
import Profile from "./pages/Profile";
import ChallengeDetail from "./pages/ChallengeDetail";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Daftar from "./pages/Register";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";
import PengaturanAkun from "./pages/PengaturanAKun";
import Event from "./pages/Event";

function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />

          {/* Protected Routes (Nested) */}
          <Route path="/Dashboard" element={<Layout />}> 
            <Route index element={<Dashboard />} />
            <Route path="Riwayat" element={<RiwayatTransaksi />} />
            <Route path="Akun" element={<PengaturanAkun />} />
            <Route path="Event" element={<Event />} />
          </Route>

          {/* Other Routes */}
          <Route path="/Katalog" element={<Katalog />} />
          <Route path="/DetailProduk" element={<DetailProduk />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ChallengeDetail" element={<ChallengeDetail />} />
        </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
}
export default App;
