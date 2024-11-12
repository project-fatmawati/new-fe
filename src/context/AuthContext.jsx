import React, {  createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

   // Fungsi untuk mendaftarkan pengguna
   const register = async (formData) => {
    try {
      const response = await axios.post('https://barterstyle-backend.onrender.com/api/auth/regis', formData);
      setUser(response.data);
      // Simpan token atau data pengguna lain ke local storage jika diperlukan
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };


    // Fungsi untuk melakukan login
    const login = async (formData) => {
      try {
        const response = await axios.post('https://barterstyle-backend.onrender.com/api/auth/login', formData);
        setUser(response.data.user);
        // Simpan token ke local storage
        localStorage.setItem('authToken', response.data.token);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

      // Fungsi untuk logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    // Periksa apakah ada token di local storage saat aplikasi dimulai
    const token = localStorage.getItem('authToken');
    if (token) {
      // Tambahkan logic untuk memverifikasi token dan mengambil data pengguna dari backend
      // ...
    } else {
      setLoading(false);
    }
  }, []);



  // const login = (user) => {
  //   setIsLoggedIn(true);
  //   setUsername(user);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUsername('');
  // };



  // return (
  //   <AuthContext.Provider value={{ isLoggedIn, username, token, login, logout }}>
  //     {children}
  //   </AuthContext.Provider>
  // );

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
// export default AuthContext;