import React from 'react'
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className={styles.container}>
    <NavLink to="/todo"
    className={"btn btn-warning "+styles.link}> 
        To Do App
    </NavLink>
    <NavLink to="/notes"
    className={"btn btn-warning "+styles.link}> 
        Note Keeper
    </NavLink>

    <NavLink to='/expensetracker'
    className={"btn btn-warning "+styles.link}> 
       Expense Tracker
    </NavLink>

    <NavLink to='/BloggingApp'
    className={"btn btn-warning "+styles.link}> 
       Blogging App
    </NavLink>

    <NavLink to='/ECommerce'
    className={"btn btn-warning "+styles.link}> 
     E-Commerce
    </NavLink>

</div>
  )
}

export default Home