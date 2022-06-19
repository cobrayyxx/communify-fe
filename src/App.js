import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Community from './components/community/Community';
import Home from './components/home/Home';
import CreateCommunity from './components/create/CreateCommunity';

function App() {
  useEffect(() => {
    document.title = "Communify"
  }, [])
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/community/:id" element={<Community/>} />
      <Route path="/community/create" element={<CreateCommunity/>} />
      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
