import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoImg from '../Images/logo.jpeg';

function Header() {
    const Navbar = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };

        return (
            <header>
                <nav>
                    <Link to="/" id="logo">
                        <img src={LogoImg} alt="Company Logo" />
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? '✖' : '☰'}
                    </div>

                    {/* Navbar Links */}
                    <ul className={menuOpen ? 'show' : ''} id="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                        {/* Authentication Buttons on Mobile */}
                        <li className="Authentication_btn">
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn" id="btn_register">Register</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };

    return <Navbar />;
}

export default Header;
