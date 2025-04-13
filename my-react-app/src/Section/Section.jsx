// import React, { useEffect } from "react";
import "./Section.css";
import Images from "../Images/vector.png";
import ThesisLogo from "../assets/thesis.svg"; // corrected variable name
import PaperLogo1 from "../assets/paper.svg"; // corrected variable name
import AOS from "aos";
import "aos/dist/aos.css";

function Section() {
    /*
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);
      */

    return (
        <div className="about-info">
            <div className="about-info-container">
                <span>Thesis Maker 100% original</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
                    sint placeat error excepturi, dicta illo consequuntur a autem nemo
                    dignissimos.
                </p>

                {/* data-aos="fade-right" */}
                <div className="about-info-img">
                    <img src={Images} alt="Illustration" />
                </div>
            </div>

            <div className="about-thesis-box">
                <div className="about-heading">
                    <h3>Docs &gt;</h3>
                </div>
                <div className="about-thesis-box-left">
                    <div className="about-thesis-box-align">
                        <img src={ThesisLogo} alt="Thesis Logo" id="thesis-logo" />
                        <div className="about-thesis-text">
                            <h2>Thesis Paper</h2>
                            <p>Create your thesis</p>
                            {/* <div className="about-btn">
                                <button className="btn">Generate</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="about-thesis-box-align">
                        <img src={PaperLogo1} alt="Thesis Logo" id="thesis-logo" />
                        <div className="about-thesis-text">
                            <h2>Reserch Paper</h2>
                            <p>Create your reserch paper</p>
                            {/* <div className="about-btn">
                                <button className="btn">Generate</button>
                            </div> */}
                        </div>
                    </div>

                    <div className="about-btn">
                        <button className="btn">Generate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
