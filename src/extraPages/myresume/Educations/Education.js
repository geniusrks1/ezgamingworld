import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "lightgreen" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2012 - 2016"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              B.TECH</h3>
            <h4 className="vertical-timeline-element-subtitle">
              IIT(ISM) DHANBAD </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "lightgreen" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              M.TECH</h3>
            <h4 className="vertical-timeline-element-subtitle">
              IIT BHU VARANSI
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "lightgreen" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              DSA WITH JAVA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CODING NINJA
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "lightgreen" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 -2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
             MERN STACK</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CODING NINJA
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "lightgreen" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 -2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
             FULL STACK </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CODING BLOCKS
            </h4>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
