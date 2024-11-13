import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);


  const regis = async (userData) => {
    console.log(userData);
  
    try {
      const response = await axios.post('http://localhost:3000/api/auth/regis', userData);

      if (response.status === 200 && response.data) {
        console.log('Registration successful:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        setUser(response.data.user); 
      } else {
        console.error('Registration failed:', response.statusText);
        throw new Error('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };


  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(                {
        email: response.data.user.email,
        password: response.data.user.password});
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };


  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');   

    if (storedToken) {
      // Periksa validitas token
      axios.get('/http://localhost:3000/api/auth/login', {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error checking token:', error);
        localStorage.removeItem('authToken');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []); 

  const logout = () => {
    localStorage.removeItem('authtoken');
    setUser(null);
    
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