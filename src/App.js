import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';  // Import SignUp component
import Login from './pages/Login';  // Import Login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />  {/* Add the SignUp route */}
        <Route path="/login" element={<Login />} />  {/* Add the Login route */}
      </Routes>
    </Router>
  );
};

export default App;
