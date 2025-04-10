import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <h3 id="logo">Phonix-X</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Service</Link></li> {/* optional route */}
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="Authentication_btn">
                    <Link to="/login"><button className="btn">Login</button></Link>
                    <Link to="/register"><button className="btn">Register</button></Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
