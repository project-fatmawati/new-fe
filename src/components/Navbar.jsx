import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-nav.png';
import './Navbar.css';

function Navbar({ userName, handleLogout }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="bg-header">
            <div className="container navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={Logo} alt="Logo BarterStyle" className="logo-img" />
                    </Link>
                </div>
                
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/info" className="nav-link">Informasi</Link>
                    <Link to="/katalog" className="nav-link">Katalog Pakaian</Link>

                    {userName ? (
                        <div className="user-info" onClick={toggleDropdown} style={{ position: 'relative' }}>
                            <button className="user-button">
                                {userName} 
                            </button>
                            {dropdownVisible && (
                                <div className="profile-dropdown">
                                    <Link to="/profile" className="dropdown-item">Profil</Link>
                                    <Link to="/logout" className="dropdown-item" onClick={() => { 
                                        setDropdownVisible(false); 
                                        handleLogout();
                                    }}>Logout</Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link">Daftar</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
