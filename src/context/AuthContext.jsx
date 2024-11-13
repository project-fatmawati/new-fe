import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// Di bagian atas file, setelah import
axios.defaults.baseURL = 'http://localhost:3000';

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // const regis = async (userData) => {
  //   console.log(userData);
  
  //   try {
  //     const response = await axios.post('http://localhost:3000/api/auth/regis', userData);

  //     if (response.status === 200 && response.data) {
  //       console.log('Registration successful:', response.data);
  //       localStorage.setItem('user', JSON.stringify(response.data.user)); 
  //       setUser(response.data.user); 
  //     } else {
  //       console.error('Registration failed:', response.statusText);
  //       throw new Error('Registration failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Registration failed:', error);
  //     throw new Error('Registration failed. Please try again.');
  //   }
  // };
  const regis = async (userData) => {
    try {
      console.log('Mengirim data registrasi:', userData);
      const response = await axios.post('http://localhost:3000/api/auth/regis', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200 && response.data) {
          console.log('Registration successful:', response.data);
          setUser(response.data.user); 
      } else {
        console.error('Registration failed:', response.statusText);
        throw new Error('Registration failed. Please try again.');
      }
      
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };




  // const login = async (userData) => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/api/auth/login', userData);
  //     const token = response.data.token;
  //     localStorage.setItem('authToken', token);
  //     setUser(response.data.user);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     throw error;
  //   }
  // };

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userData);
      
      // Pastikan response memiliki data yang diperlukan
      if (response.data && response.data.user) {
        // Simpan token dan data user
        localStorage.setItem('token', response.data.token);
        
        // Pastikan menyimpan semua data user yang diperlukan
        const userToStore = {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          // tambahkan field lain yang diperlukan
        };
        
        localStorage.setItem('user', JSON.stringify(userToStore));
        
        // Update state user dengan data lengkap
        setUser(userToStore);
        
        return response.data;
      } else {
        throw new Error('Data user tidak lengkap');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error('Email atau password salah');
      }
      console.error('Login error:', error);
      throw new Error('Terjadi kesalahan saat login');
    }
  };
  // useEffect(() => {
  //   const storedToken = localStorage.getItem('authToken');   

  //   if (storedToken) {
  //     // Periksa validitas token
  //     axios.get('/http://localhost:3000/api/auth/login', {
  //       headers: {
  //         Authorization: `Bearer ${storedToken}`
  //       }
  //     })
  //     .then(response => {
  //       setUser(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error checking token:', error);
  //       localStorage.removeItem('authToken');
  //       setLoading(false);
  //     });
  //   } else {
  //     setLoading(false);
  //   }
  // }, []); 

  // const logout = () => {
  //   localStorage.removeItem('authtoken');
  //   setUser(null);
    
  // };
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
  
    if (storedToken && storedUser) {
      try {
        // Langsung set user dari localStorage
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } catch (error) {
        // Jika ada masalah dengan parsing JSON
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    try {
      // Hapus data dari localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      // Reset state user menjadi null
      setUser(null);
      
      // Opsional: Hapus header Authorization dari axios
      delete axios.defaults.headers.common['Authorization'];
      
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Gagal melakukan logout. Silakan coba lagi.');
    }
  };

  return ( // Curly brace added here
    <AuthContext.Provider value={{ user, regis, login, logout, loading }}>
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