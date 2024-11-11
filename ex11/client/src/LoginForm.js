import React, { useState, useRef } from 'react';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => {
  // Refs for direct access to input fields
  const usernameRef = useRef();
  const passwordRef = useRef();

  // State for managing input values
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // Handlers for input changes
  const handleUsernameChange = (event) => setUsernameValue(event.target.value);
  const handlePasswordChange = (event) => setPasswordValue(event.target.value);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(formData); // Calls the parent function on submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        ref={usernameRef}
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        ref={passwordRef}
        id="password-input"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />

      <button id="login-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
