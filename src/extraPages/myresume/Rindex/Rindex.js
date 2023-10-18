import React from "react";

import ReactTyped from "react-typed";
import Resume from "../Resume_RohitKumar.pdf";
import "./Rindex.css";
import Fade from "react-reveal/Fade";

const Rindex = () => {

 
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>ROHIT KUMAR</h2>
            <h1>
                <ReactTyped strings={[
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React Developer"
                  ]} typeSpeed={100} loop />
            
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7007814974"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Rohit_Kumar.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Rindex;
