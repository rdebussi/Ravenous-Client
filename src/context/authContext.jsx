// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('x-access-token'),
    isAuthenticated: false,
    loading: true,
    user: {}
  });


  //gambiarra aqui
  useEffect(() => {
    const fet = async () => {
    if (auth.token) {
      axios.defaults.headers.common['x-access-token'] = auth.token;
      const n =  localStorage.getItem("id")
      const user = await axios.get(`http://localhost:1010/user/${n}`);
      setAuth({ ...auth, isAuthenticated: true, loading: false , user: user.data.user });
    } else {
    }
    }
     fet()
  }, [auth.token]);

  
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:1010/login', { email, password });
      const n = response.data.user.id
      localStorage.setItem('id', n);
      localStorage.setItem('x-access-token', response.data.token);
      axios.defaults.headers.common['x-access-token'] = response.data.token;  
      const user = await axios.get(`http://localhost:1010/user/${n}`);
      setAuth({ token: response.data.token, isAuthenticated: true, loading: false, user: user.data.user});
      console.log("authContext + ", auth)
    } catch (err) {
      console.error(err.message);
      setAuth({ ...auth, isAuthenticated: false, loading: false });
    }
  };

  const logout = () => {
    localStorage.removeItem('x-access-token');
    delete axios.defaults.headers.common['x-access-token'];
    setAuth({ token: null, isAuthenticated: false, loading: false });
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
