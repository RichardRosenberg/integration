import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Instruments from './components/Instruments/Instruments';
import Title from './components/Title/Title';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterStudentForm from './components/RegisterForm/RegisterStudentForm';
import RegisterTeacherForm from './components/RegisterForm/RegisterTeacherForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterStudent, setShowRegisterStudent] = useState(false);
  const [showRegisterTeacher, setShowRegisterTeacher] = useState(false);

  // Function to toggle login form visibility
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowRegisterStudent(false);
    setShowRegisterTeacher(false);
  };

  // Function to toggle registration form visibility for students
  const toggleRegisterStudentForm = () => {
    setShowRegisterStudent(!showRegisterStudent);
    setShowLogin(false);
    setShowRegisterTeacher(false);
  };

  // Function to toggle registration form visibility for teachers
  const toggleRegisterTeacherForm = () => {
    setShowRegisterTeacher(!showRegisterTeacher);
    setShowLogin(false);
    setShowRegisterStudent(false);
  };

  return (
    document.title="Music Academy",
    <div>
      <Navbar toggleLoginForm={toggleLoginForm} />
      <Hero toggleRegisterStudentForm={toggleRegisterStudentForm} toggleRegisterTeacherForm={toggleRegisterTeacherForm} />
      <div className="container">
        <Title title="Instruments" />
        <Instruments />
        <Title title="About Music Academy" />
        <About />
        <Title title="Testimonials" />
        <Testimonials />
        <Title title="Contact us" />
        <Contact />
        <Footer />
      </div>
      {showLogin && <LoginForm />}
      {showRegisterStudent && <RegisterStudentForm />}
      {showRegisterTeacher && <RegisterTeacherForm />}
    </div>
  );
}

export default App;
