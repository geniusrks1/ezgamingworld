import React from "react";

import ReactTyped from "react-typed";
import Resume from "../resume.txt";
import "./Rindex.css";
import Fade from "react-reveal/Fade";

const Rindex = () => {

 
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
                <ReactTyped strings={["FullStack Developer!","Mern Stack Developer!"]} typeSpeed={100} loop />
            
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=1234567890"
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
