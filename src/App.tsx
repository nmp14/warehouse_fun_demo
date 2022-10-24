import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.scss';


const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;