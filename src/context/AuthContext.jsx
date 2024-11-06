import React, { createContext, useContext, useState } from 'react';

// Create a Context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
