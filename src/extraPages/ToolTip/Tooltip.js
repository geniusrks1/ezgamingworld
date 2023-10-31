// Tooltip.js
import React from 'react';
import styles from './Tooltip.module.css'; // Import the CSS module

const Tooltip = ({ position, text, children }) => {
  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div className={`${styles.tooltip} ${styles[position]}`}>
        {text}
        </div>
    </div>
  );
};

export default Tooltip;
