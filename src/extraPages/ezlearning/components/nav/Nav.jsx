import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet} from "react-router-dom";
import { userSelector ,signout, signInWithGoogle} from "../../../../redux/reducer/UserReducer";
import {  useDispatch, useSelector } from 'react-redux';
function Nav() {
  const{user }=useSelector(userSelector)
  const dispatch=useDispatch();


const handleLoginClick=()=>{
if(user){
  dispatch(signout());
}
else{
  dispatch(signInWithGoogle());
}

  }
  return (
    <>
    <nav className={style.nav}>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <Link to=''>
          <img
            className={style.logo}
            src="/static/studyHub/study-hub-logo.png"
            alt="logo"
          />
          </Link>
          <h4>Study Hub</h4>
        </div>
        <div className={style.nav_details}>
          <button>
         <NavLink to='courses'>
          {({ isActive })=>( isActive ? "Courses" : "Go To Courses")}
         </NavLink>
         </button>
          <button 
           onClick={handleLoginClick}>

       {user?  "Logout":"Login"}
         
         </button>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

