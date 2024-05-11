import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginSignUp from './pages/loginSignUp';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginSignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;