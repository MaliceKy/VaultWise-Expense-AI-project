import React from 'react';
import './components/scrollbarStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Navbar from './components/Navbar.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import Dashboard from './pages/Dash-board.js';


// import other components...
function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
