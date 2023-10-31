// Import necessary libraries and components from React and external files
import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip'; // Import the custom Tooltip component
import { GrTooltip } from 'react-icons/gr'; // Import an icon component from the react-icons library

// Define the TooltipHome functional component that demonstrates the usage of the Tooltip component
const TooltipHome = () => {
  // State variable to manage the selected position of the tooltip, default is 'top'
  const [selectedPosition, setSelectedPosition] = useState('top');

  // Event handler function to update the selected tooltip position based on radio button selection
  const handleRadioChange = (position) => {
    setSelectedPosition(position);
  };

  // Styles for the container, label, radio buttons, and heading elements
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '200px',
    fontSize: '18px',
  };

  const radioStyle = {
    margin: '0 10px',
  };

  const headingStyle = {
    color: '#333',
    textDecoration: 'underline dotted',
  };

  // useEffect hook to set the document title and favicon when the component mounts
  useEffect(() => {
    document.title = "Tooltip"; // Set the document title
    document.querySelector('link[rel="icon"]').setAttribute('href', GrTooltip()); // Set the favicon using the imported icon component
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  // Render the component UI with radio buttons and the Tooltip component
  return (
    <div style={containerStyle}>
      {/* Radio buttons to select tooltip position */}
      <div style={labelStyle}>
        <label>
          Select Tooltip Position:
          <br />
          {/* Radio buttons for top, bottom, right, and left positions */}
          <input type="radio" name="position" value="top" checked={selectedPosition === 'top'} onChange={() => handleRadioChange('top')} style={radioStyle} /> Top
          <input type="radio" name="position" value="bottom" checked={selectedPosition === 'bottom'} onChange={() => handleRadioChange('bottom')} style={radioStyle} /> Bottom
          <input type="radio" name="position" value="right" checked={selectedPosition === 'right'} onChange={() => handleRadioChange('right')} style={radioStyle} /> Right
          <input type="radio" name="position" value="left" checked={selectedPosition === 'left'} onChange={() => handleRadioChange('left')} style={radioStyle} /> Left
        </label>
      </div>
      
      {/* Tooltip component with selected position and text */}
      <Tooltip position={selectedPosition} text="Thanks for hovering! I'm tooltip">
        {/* Heading element with underline, indicating where to hover for the tooltip */}
        <h4 style={headingStyle}>Hover Over Me! </h4>
      </Tooltip>
    </div>
  );
};

// Export the TooltipHome component to be used in other parts of the application
export default TooltipHome;
