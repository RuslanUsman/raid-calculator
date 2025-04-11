// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainMenuu from './components2/MainMenu';
import MaterialSelection from './components2/MaterialSelection';
import ConstructionSelection from './components2/ConstructionSelection';
import Result from './components2/Result';
import DragonWebApp from './components2/DragonWebApp';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Начальный маршрут перенаправляет на MainMenu */}
        <Route path="/" element={<Navigate to="/main-menu" />} />
        
        {/* Определение маршрутов */}
        <Route path="/main-menu" element={<MainMenuu />} />
        <Route path="/materials" element={<MaterialSelection />} />
        <Route path="/construction" element={<ConstructionSelection />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dragon-web-app" element={<DragonWebApp />} />
      </Routes>
    </Router>
  );
};

export default App;
