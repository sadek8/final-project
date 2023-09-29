
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation here
    const storedAdminUsername = 'admin';
    const storedAdminPassword = 'admin';
    const storedUserUsername = localStorage.getItem('username');
    const storedUserPassword = localStorage.getItem('password');

    if (username === storedAdminUsername && password === storedAdminPassword) {
      // Admin login
      navigate('/admin');
    } else if (username === storedUserUsername && password === storedUserPassword) {
      // User login
      navigate('/booking-summary-action');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default Login;
