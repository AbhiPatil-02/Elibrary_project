
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Separate CSS for enhanced styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('token', data.token); // Store JWT token
        alert('Login successful');
        window.location.href = 'index1.html'; // Redirect to homepage after successful login
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while logging in');
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <p>Don't have an account? <a href="/signup" className="login-link">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
