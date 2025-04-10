import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import "../Header/Header.css";
import "../Footer/Footer.css"; 
import "./Register.css"; 

const Register = () => {
    return (
        <>
            <Header />
            <h2 style={{ padding: "50px" }}>Register Page</h2> {/* ✅ FIXED */}

            /* Add your registration form here */

            
            <Footer />
        </>
    );
};

export default Register;
