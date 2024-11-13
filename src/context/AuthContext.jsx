import React, {  createContext, useContext, useState,useEffect } from 'react';
import axios from 'axios'

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 


  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');




  const regis = async (formData) => {
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:3000/api/auth/regis', 
        {fullName : "Rikakamila", username: "rika", email : "rikakamila@gmail.com"});
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      const data = await response.json();
      setUser(data);
      // Simpan token atau data pengguna lain ke local storage jika diperlukan
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  const login = async (formData) => {
    try {
      const response = await fetch('https://barterstyle-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(await   
   response.text());
      }
  
      const data = await response.json();
      setUser(setUser(data.user));
      localStorage.setItem('authToken', data.token);
    } catch (error) {
      setError(error.message);
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



  return (
    <AuthContext.Provider value={{  regis, login, logout, setLoading , setError}}>
      {children}
    </AuthContext.Provider>
  );

  // return (
  //   <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
  //     {children}
  //   </AuthContext.Provider>
  // );


}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
