import React, { useState } from 'react'
import {NavLink, Outlet} from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import styles from "./Nav.module.css"
// import { userSelector } from '../../redux/reducer/UserReducer'
// import { useSelector } from 'react-redux';

import Footer from '../footer/Footer'


const Nav = () => {
// const user =useSelector(userSelector);  

const [showItems, setShowItems] = useState(false);

const toggleItems = () => {
  setShowItems(!showItems);
};

 
  return (
    <>
<nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}> <img src='./static/ezlogo.png' alt='ezlogo'/></div>
        <div className={styles.companyName}>EZGAMINGWORLD</div>
        <input type="text" placeholder="Search" className={styles.searchBar} />
      </div>
  

<div className={`${styles.middle} ${showItems ? styles.showItems : ''}`}>
          <div className={styles.navItem}>Tournaments</div>
          <div className={styles.navItem}>Scrims</div>
          <div className={styles.navItem}>Contests</div>
          <div className={styles.navItem}>Bgmi</div>
          <div className={styles.navItem}>Entertainment</div>
        </div>

        <button className={styles.toggleButton} onClick={toggleItems}>
          <FaBars />
        </button>


      <div className={styles.right}>
        <div className={styles.login}>Login</div>
      </div>
    </nav>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Nav