import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AlertProvider } from './contexts/alert';

import Home from './pages/home';
import LoginSignUp from './pages/loginSignUp';

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;