import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-nav.png';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, username, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white px-4 py-3 shadow-md font-sans relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="BarterStyle Logo" className="h-12" />
        </Link>
        <div className="flex items-center space-x-6 hidden md:flex">
          <Link to="/" className="text-black font-bold text-lg hover:text-teal-700">Home</Link>
          <Link to="/katalog" className="text-black font-bold text-lg hover:text-teal-700">Katalog Pakaian</Link>
          <Link to="/informasi" className="text-black font-bold text-lg hover:text-teal-700">Informasi</Link>
          <Link to="/tentang" className="text-black font-bold text-lg hover:text-teal-700">Tentang Kami</Link>
          {isLoggedIn ? (
            <div className="relative dropdown">
              <button onClick={toggleDropdown} className="flex items-center bg-teal text-white px-4 py-2 rounded font-bold text-lg">
                {username}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded shadow-lg">
                  <Link to="/profil" className="block px-4 py-2 text-black hover:bg-gray-300">Profil</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-300">Keluar</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-teal text-white px-4 py-2 rounded font-bold text-lg">Login/Register</button>
            </Link>
          )}
        </div>
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white px-4 py-2`}>
        <Link to="/" className="block text-black font-bold text-base py-2 hover:text-teal-700">Home</Link>
        <Link to="/katalog" className="block text-black font-bold text-base py-2 hover:text-teal-700">Katalog Pakaian</Link>
        <Link to="/informasi" className="block text-black font-bold text-base py-2 hover:text-teal-700">Informasi</Link>
        <Link to="/About" className="block text-black font-bold text-base py-2 hover:text-teal-700">Tentang Kami</Link>
        {isLoggedIn ? (
          <button onClick={logout} className="block text-black font-bold text-base py-2">Logout</button>
        ) : (
          <Link to="/login">
            <button className="block bg-teal text-white px-4 py-2 rounded font-bold text-base">Login/Register</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

