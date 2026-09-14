import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest, getToken, setToken } from '../utils/api';
import { useTheme } from './ThemeContext';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register' | 'forgot' | 'reset'

  const { setTheme } = useTheme();

  // Check auth state on mount
  useEffect(() => {
    async function checkAuth() {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await apiRequest('/auth/me');
        setUser(res.user);
        if (res.user.theme_preference) {
          setTheme(res.user.theme_preference);
        }
      } catch (err) {
        console.error('Session validation failed:', err);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const res = await apiRequest('/auth/login', 'POST', { email, password });
    setToken(res.token);
    setUser(res.user);
    if (res.user.theme_preference) {
      setTheme(res.user.theme_preference);
    }
    setAuthModalOpen(false);
    return res;
  };

  const register = async (name, email, password, confirmPassword) => {
    const res = await apiRequest('/auth/register', 'POST', { name, email, password, confirmPassword });
    setToken(res.token);
    setUser(res.user);
    setAuthModalOpen(false);
    return res;
  };

  const forgotPassword = async (email) => {
    return await apiRequest('/auth/forgot-password', 'POST', { email });
  };

  const resetPassword = async (email, resetCode, newPassword) => {
    return await apiRequest('/auth/reset-password', 'POST', { email, resetCode, newPassword });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      forgotPassword,
      resetPassword,
      logout,
      authModalOpen,
      authModalTab,
      openAuthModal,
      closeAuthModal,
      setAuthModalTab,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
