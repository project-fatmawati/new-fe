import React from 'react';
import Logo from '../assets/Logo-nav.png';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-8">

        <div>
          <img 
            src={Logo} 
            alt="Logo BarterStyle" 
            className="w-40 h-auto" 
          />
          <p className="mt-2">Sebuah platform yang mengajak Anda untuk berpartisipasi dalam revolusi fashion berkelanjutan. Dengan BarterStyle, Anda dapat memperpanjang umur pakai pakaian Anda.</p>
          <p className="mt-4">Info@barterstyle.com</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Site Link</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/home" className="hover:text-teal font-semibold">Home</a></li>
            <li><a href="/about" className="hover:text-teal font-semibold">Tentang Kami</a></li>
            <li><a href="/events" className="hover:text-teal font-semibold">Event</a></li>
            <li><a href="/donate" className="hover:text-teal font-semibold">Donasi</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Sosial Media</h3>
          <div className="mt-5 space-x-5">
            <a href="#" className='hover:text-teal font-semibold'>Facebook</a>
            <a href="#" className='hover:text-teal font-semibold'>Instagram</a>
            <a href="#" className='hover:text-teal font-semibold'>YouTube</a>
            <a href="#" className='hover:text-teal font-semibold'>WhatsApp</a>
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
