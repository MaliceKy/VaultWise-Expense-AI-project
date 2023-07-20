import React from 'react';
import './assets/fonts/fonts.css';
import './components/scrollbarStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage/HomePage.js';
import Navbar from './components/Navbar.js';
import SignIn from './login-logout/SignIn.js';
import SignUp from './login-logout/SignUp.js';
import Dashboard from './dashboard/Dashboard.js';


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
