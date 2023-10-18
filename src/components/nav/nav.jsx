import React from 'react'
import {Outlet,Link,NavLink} from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import styles from "./Nav.module.css"
import {SiYoutubegaming} from 'react-icons/si'

import Footer from '../footer/Footer'
const nav = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
 
  <div className="container-fluid">
   
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <FaBars/>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <Link className="navbar-brand mt-2 mt-lg-0" href="#">
        <SiYoutubegaming   className={styles.ezlogo}/>
      </Link>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="bgmi">BGMI </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="tournaments">Tournaments </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="article">Articles </NavLink>
        </li>
      </ul>
    
    </div>
    

  
    <div className="d-flex align-items-center">
     
      <NavLink className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
       </NavLink>

      
      <div className="dropdown">
        <NavLink
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
         </NavLink>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <NavLink className="dropdown-item" href="#">Some news </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="#">Another news </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="#">Something else here </NavLink>
          </li>
        </ul>
      </div>
     
      <div className="dropdown">
        <NavLink
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
         </NavLink>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <NavLink className="dropdown-item" href="#">My profile </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="#">Settings </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" href="#">Logout </NavLink>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
  
</nav>

    <Outlet/>
    <Footer/>
    </>
  )
}

export default nav