import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import {Link} from 'react-router-dom'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         My Recent Work
        </p>
        {/* card design */}



        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <Link
                   
                    to="../expensetracker"
                    target="_blank"
                  >
                  <img
                    src="./static/expense-tracker.jpg"
                    alt="project1"
                  />
                      </Link>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">Firebase</span>
                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Expense Tracker Website
                    </h6>
                  </div>
                  <Link
                    className="ad-btn"
                    to="../expensetracker"
                    target="_blank"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>












            
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <Link
                    to="https://ecommerceapp-ly7b.onrender.com/"
                    target="_blank"
                  >
                  <img
                    src="./static/e-comerce.jpg"
                    alt="project2"
                  />
                  </Link>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">ExpressJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">E-commerce App</h6>
                  </div>
                  <Link
                    className="ad-btn"
                    to="https://ecommerceapp-ly7b.onrender.com/"
                    target="_blank"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            






           

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <Link
                  to="https://ezchatapp.onrender.com/"
                  target="_blank"
                   >
                  <img
                    src="./static/chat-app.jpg"
                    alt="project1"
                  />
               </Link>


                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">Socket.io</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Secret Chat App</h6>
                  </div>

                  <Link
                   className="ad-btn"
                   to="https://ezchatapp.onrender.com/"
                   target="_blank"
                    >
                    View
                  </Link>
                </div>
              </div>
            </div>










            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Ipod</span>
                 
            <Link 
              to="https://ezgamingworld.com/ipod"
              target="_blank">
                 
                  <img
                    src="./static/ipod.jpg"
                    alt="project1"
                  />
                   </Link>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase"
                    style={{color:"black"}}
                    >mp3 player</h6>
                  </div>
                  <Link
                   className="ad-btn btn"
                   to="https://ezgamingworld.com/ipod"
                   target="_blank"
                    >
                   View
                  </Link>
                 
                </div>
              </div>
            </div>
           




















          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
