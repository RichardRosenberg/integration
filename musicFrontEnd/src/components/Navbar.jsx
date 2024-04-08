import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logoW.png';

const Navbar = () => {
  const [clickedLink, setClickedLink] = useState('Home');

  const handleLogin = () => {
    window.location.href = 'http://localhost:8081/login';
  };

  return (
    <nav className='container'>
      <Link to="/">
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <ul>
        <div className='nav-links'>
          <li><Link to="/" onClick={() => setClickedLink('Home')}>Home</Link></li>
          <li><Link to="/instruments" onClick={() => setClickedLink('Instruments')}>Instruments</Link></li>
          <li><Link to="/about" onClick={() => setClickedLink('About')}>About us</Link></li>
          <li><Link to="/testimonials" onClick={() => setClickedLink('Testimonials')}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => setClickedLink('Contact')}>Contact us</Link></li>
        </div>
        <li><button className={`btn`} onClick={handleLogin}>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
