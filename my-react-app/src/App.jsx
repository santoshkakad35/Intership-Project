import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Section from './Section/Section.jsx';
import Service from './Service/Service.jsx';
import Clients from './Clients/Clients.jsx';
import Testinomial from './Testinomial/Testinomial.jsx';
import LoginPage from './Login/Login.jsx';         // Renamed import
import RegisterPage from './Register/Register.jsx'; // Renamed import

import './Header/Header.css';
import './Footer/Footer.css';
import './Section/Section.css';
import './Service/Service.css';
import './Clients/Clients.css';
import './Testinomial/Testinomial.css';
import './Login/Login.css';
import './Register/Register.css';
import './App.css';

const Home = () => (
  <>
    <Header />
    <Section />
    <Service />
    <Clients />
    <Testinomial />
    <Footer />
  </>
);

const About = () => (
  <>
    <Header />
    <h2 style={{ padding: '50px' }}>About Us Page</h2>
    <Footer />
  </>
);

const Contact = () => (
  <>
    <Header />
    <h2 style={{ padding: '50px' }}>Contact Us Page</h2>
    <Footer />
  </>
);

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
