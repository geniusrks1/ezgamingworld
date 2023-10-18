import React from "react";
import { MdWorkspacePremium } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "lightblue" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2021 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkspacePremium />}
            >
              <h3 className="vertical-timeline-element-title">
                React Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <NavLink 
                to="/"
                style={isActive => ({
                  color: isActive ? "blue" : "black"
                })}
                >ezgamingworld.com</NavLink>
              </h4>
              <p className="dog">
              Founder,Creative Design, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "lightblue" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkspacePremium />}
            >
              <h3 className="vertical-timeline-element-title">
              Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Coding Ninja
              </h4>
              <p className="dog">
              Taking doubts of students related to data structures and algorithms. In the span of 4 month, i have taken 1350 doubts.
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "lightblue" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023-"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkspacePremium />}
            >
              <h3 className="vertical-timeline-element-title">
              Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Coding Ninja
              </h4>
              <p className="dog">
                FrontEnd Developer
              </p>
            </VerticalTimelineElement>



          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
