import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Buy from './pages/Buy';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import Properties from './pages/Properties';

const App = () => {
  return (
    <AuthProvider>
      {/* <Navbar />   Show navbar everywhere */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Buy />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
