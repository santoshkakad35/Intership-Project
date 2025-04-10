import React from 'react';
import './Clients.css'; // CSS for styling
import Img1 from '../Images/u1.png'; // Make sure the path is correct
import Img2 from '../Images/u1.jpg'; // Make sure the path is correct
import Img3 from '../Images/u3.png'; // Make sure the path is correct

function Clients() {
    return (
        <div className="clients">
            <h3>Our Clients Company</h3>
            <div className="clients-list">
                <div className="client-item">
                    <img src={Img1} alt="Client Logo" />
                </div>
                <div className="client-item">
                    <img src={Img2} alt="Client Logo" />
                </div>
                <div className="client-item">
                    <img src={Img3} alt="Client Logo" />
                </div>
                <div className="client-item">
                    <img src={Img1} alt="Client Logo" />
                </div>
            </div>
        </div>
    );
}

export default Clients;
