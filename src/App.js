import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from "react";
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className='page'>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/drift' exact element={<DriftPage />} />
          <Route path='/timeattack' exact element={<TimeAttackPage />} />
          <Route path='/forza' exact element={<ForzaPage />} />
        </div>
      </div>
    </Router>
  )
}

export default App;