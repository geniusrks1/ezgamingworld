import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <> <nav className={styles.nav}>
        <h2>Quotes App</h2>
        <ul className={styles.ul}>
            <li> <Link to="/quotesApp" >All Quotes </Link></li>
            <li> <Link to="/quotesApp/new" >New Quotes </Link></li>
        </ul>
        

    </nav></>
  )
}

export default Navigation
