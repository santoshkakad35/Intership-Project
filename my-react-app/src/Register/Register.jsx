import React,{useState} from "react";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer.jsx";
import LogoImg from '../Images/logo.jpeg';
import "../Footer/Footer.css"; 
import "./Register.css";

const Register = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleRegister = (e) => {
    e.preventDefault();
    if (agreeTerms) {
      console.log('Registering with:', { email, password, phone });
      alert ('Registration successful!');
    } else {
      alert('Please agree to the Terms of Service and Privacy Policy.');
    }
  };
    return (
        <>
        <header>
                <nav>
                    <Link to="/" id="logo">
                        <img src={LogoImg} alt="Company Logo" />
                    </Link>

                    <div className="loginLink nav-loginLink">
                       <b> Have an account already? <a href="/login">Sign in</a></b>
                    </div>                        
                    
                </nav>
            </header>
            
            <div className={"registerContainer"}>
        <div className={"registerBox"}>
          <h2 className={"registerTitle"}>Join us today. </h2>
          <form onSubmit={handleRegister}>
            <div className={"formGroup"}>
              <label htmlFor="email" className={"label"}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                className={"input"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={"formGroup"}>
              <label htmlFor="password" className={"label"}>
                Password*
              </label>
              <input
                type="password"
                id="password"
                className={"input"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={"formGroup"}>
              <label htmlFor="phone" className={"label"}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className={"input"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className={"agreeCheckbox"}>
              <input
                type="checkbox"
                id="agree"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <label htmlFor="agree" className={"agreeText"}>
                I agree to the{' '}
                <a href="/terms" className={"agreeLink"}>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className={"agreeLink"}>
                  Privacy Policy
                </a>.
              </label>
            </div>
            <button type="submit" className={"registerButton"}>
              Register
            </button>

          </form>

          

          <div className={"loginLink"}>
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
            
            <Footer />
        </>
    );
};

export default Register;
