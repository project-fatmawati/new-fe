import React from "react";
import { useRoutes } from 'react-router-dom';
import Navbar from "../components/Navbar";
import About from "../components/About";
import DropPoints from "../components/DropPoints";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
      <DropPoints />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AboutPage;
