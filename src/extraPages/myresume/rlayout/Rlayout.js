import React, { useState ,useEffect} from "react";
import HomeRindex from "../Rindex/Rindex";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Rlayout.css";
import Menu from "../rmenu/Menu";

const Rlayout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(()=>{
        document.title="Rohit Kumar";
        document.querySelector('link[rel="icon"]').setAttribute('href', 'resume-favicon.png')
},[])


  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <HomeRindex />
        </div>
      </div>
    </>
  );
};

export default Rlayout;