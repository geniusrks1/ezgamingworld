// Tooltip.js
// This file defines a React component called Tooltip that displays a tooltip message on hover.

// Import the React library to create React components
import React from 'react';

// Import the CSS module containing styles for the Tooltip component
import styles from './Tooltip.module.css';

// Define the Tooltip functional component that takes position, text, and children as props
const Tooltip = ({ position, text, children }) => {
  // Render the Tooltip component with provided position, text, and children props
  return (
    // Container div to hold the tooltip and the child content
    <div className={styles.tooltipContainer}>
      {/* Render the children components passed to the Tooltip */}
      {children}
      
      {/* Tooltip element with dynamic styles based on the provided position prop */}
      <div className={`${styles.tooltip} ${styles[position]}`}>
        {/* Display the text content provided as a prop */}
        {text}
      </div>
    </div>
  );
};

// Export the Tooltip component to be used in other parts of the application
export default Tooltip;
