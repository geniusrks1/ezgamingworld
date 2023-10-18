import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="./static/rohitkumar.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Innovative Full Stack Web Developer (MERN STACK), with excellent UI and UX Design skills and experience in creating beautiful and Responsive web applications with decent user interfaces. I have several major projects to show as my ability to help with pretty much any web based project. I have prior experience in making catchy and beautiful front end with fully secured and fast under the backend of the application. 
              I also have experience in deploying websites on FireBase.
              Apart from these, I am also a Question Solver based on Data Structure and competetive programming in Java , having excellence certificate in both of these fields from Coding Ninjas.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
