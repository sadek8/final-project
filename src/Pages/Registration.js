import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // Store the user in localStorage
    // For simplicity, we'll use localStorage in this example
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/login");
    alert("Registration successful! Please log in.");
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
