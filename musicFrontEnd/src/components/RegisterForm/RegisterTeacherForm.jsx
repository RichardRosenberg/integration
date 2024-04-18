import React, { useState } from 'react';
import axios from 'axios';
import '../LoginForm/LoginForm'

const RegisterTeacherForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [visible, setVisible] = useState(true);

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
    return regex.test(value);
  };

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]{1,14}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError('');
    setSuccessMessage('');
    
    console.log("Username:", username);
    console.log("Password:", password);
    
    if (!validatePassword(password)) {
      setError('Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be 8-14 characters long.');
      return;
    }
    
    if (!validateUsername(username)) {
      setError('Username must be 1-14 characters long and contain only letters and numbers.');
      return;
    }
    
    console.log("Validation passed. Username:", username);
    console.log("Validation passed. Password:", password);
    
    try {
      const usernameResponse = await axios.get(`http://localhost:8081/check-username/${username}`);
      
      if (!usernameResponse.data) { 
        setError('Username is already taken. Please try another.');
        return;
      }
    
      console.log("Username check passed. Username:", username);
      
      await axios.post('http://localhost:8081/register/teacher', {
        username,
        password,
        role: "ROLE_TEACHER" 
      });
      setSuccessMessage('Registration successful! You can now login.');
      setUsername('');
      setPassword('');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error("Registration error:", error);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null; 
  }

  return (
    <div className='page-container'>
      <div className='register-form'>
        <h1>Register Teacher<span className="close-button" onClick={handleClose}>X</span></h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <br />
          <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <button type="submit">Register</button>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default RegisterTeacherForm;
