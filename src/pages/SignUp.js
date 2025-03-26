
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Separate CSS file for styling

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = { fullName, username, mobile, password };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert('User created successfully');
        navigate('/login');
      } else {
        alert(data.message || 'Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while signing up');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-overlay">
        <h1 className="signup-title">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-links">
          <p>Already have an account? <a href="/login" className="signup-link">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

