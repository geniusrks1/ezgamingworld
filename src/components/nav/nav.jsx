import React from 'react'
import {Outlet,Link,NavLink} from "react-router-dom"
import styles from './Nav.module.css'
const nav = () => {
  return (
    <>
    <nav>
    <div className={styles.nav_container}>
    <div className={styles.nav_title_wrapper}>
            <Link to="/">
              <img
                className={styles.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />
            </Link>
            <h4>ezgamingworld</h4>
          </div>

          <div className={styles.nav_details}>

<div> <NavLink to='/'
 style={({ isActive }) => ({
  color: isActive ? 'black' : 'white',
})}> 
Home </NavLink></div>

<div> <NavLink to='/games'> games</NavLink></div>
<div><NavLink to='/tournaments'>Tournaments</NavLink></div>
<div> <NavLink to='/bgmi'>BGMI</NavLink></div>
<div><NavLink to='/article'>Article</NavLink></div>
          </div>
          </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default nav