import React, { useEffect } from "react";
import "./Section.css";

import Images from "../Images/img2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Section() {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="about-info">
                <div className="about-info-container" data-aos="fade-left">
                    <h3>Thesis Maker 100% original</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
                        sint placeat error excepturi, dicta illo consequuntur a autem nemo
                        dignissimos.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        totam iste consectetur eveniet
                    </p>

                    <div className="about-btn">
                        <button className="btn">Generate</button>
                    </div>
                </div>

                <div className="about-info-img" data-aos="fade-right">
                    <img src={Images} alt="Descriptive alt text" />
                </div>
            </div>
        </>
    );
}

export default Section;
