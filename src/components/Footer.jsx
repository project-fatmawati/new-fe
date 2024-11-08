import React from "react";
import Logo from "../assets/Logo-nav.png";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-8 py-8 pl-5">
        <div>
          <img src={Logo} alt="Logo BarterStyle" className="w-[220px] h-auto pb-2" />
          <p className="mt-2">
            Sebuah platform yang mengajak Anda untuk berpartisipasi dalam
            revolusi fashion berkelanjutan. Dengan BarterStyle, Anda dapat
            memperpanjang umur pakai pakaian Anda kapan saja dan dimana saja.
          </p>
          <p className="mt-4">Info@barterstyle.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Site Link</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/home" className="hover:text-teal ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal ">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-teal ">
                Event
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-teal ">
                Donasi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Sosial Media</h3>
          <div className="mt-5 flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0">
            <a
              href="#"
              className="flex items-center hover:text-teal font-semibold"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </a>
            <a
              href="#"
              className="flex items-center hover:text-teal font-semibold"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center hover:text-teal font-semibold"
            >
              <FaYoutube className="mr-2" />
              YouTube
            </a>
            <a
              href="#"
              className="flex items-center hover:text-teal font-semibold"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="bg-teal pt-5 pb-5 mt-8 text-white text-center font-semibold">
        &copy; BarterStyle 2024 all rights reserved by Fatmawati
      </div>
    </footer>
  );
}

export default Footer;
