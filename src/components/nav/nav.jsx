import React, { useState } from 'react'
import {NavLink, Outlet} from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import styles from "./Nav.module.css"
import {SiYoutubegaming} from 'react-icons/si'

import Footer from '../footer/Footer'

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<nav className={styles.navbar}>
      <div><SiYoutubegaming/> </div>
      <button className={styles.toggleButton} onClick={toggleNavbar}>
       <FaBars/>
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li> <NavLink to=''>Home</NavLink></li>
        <li> <NavLink to='bgmitournaments'>BGMI</NavLink></li>
        <li>FreeFire</li>
       
        <li>Features</li>
      </ul>
    </nav>

    <Outlet/>
    <Footer/>
    </>
  )
}

export default Nav