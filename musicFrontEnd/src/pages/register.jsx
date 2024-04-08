import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //client-side validation
    if (!/^[a-zA-Z0-9]{1,10}$/.test(username)) {
      setError('Username must be letters or numbers and 10 characters max.');
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,12}/.test(password)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, one number, and be 7-12 characters long.');
      return;
    }

    // //backend validation
    // try {
    //   const usernameResponse = await axios.get(`http://localhost:8081/check-username/${username}`);
    //   if (usernameResponse.data.exists) {
    //     setError('Username is already taken. Please try another.');
    //     return;
    //   }
    // } catch (error) {
    //   console.error('Error checking username availability:', error);
    //   setError('An error occurred. Please try again.');
    //   return;
    // }

    //if passed validation, proceed with registration
    try {
      const response = await axios.post('http://localhost:8081/register/user', {
        username,
        password,
        role: 'ROLE_STUDENT'
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <title>Register</title>
      <div className='page-container'>
        <div className='register-form'>
          <form onSubmit={handleSubmit}>
            <h1 className='h1-not-home'>Register</h1>
            <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
