import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#sellerkin" className={styles.navLink}>Sellerkin</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
