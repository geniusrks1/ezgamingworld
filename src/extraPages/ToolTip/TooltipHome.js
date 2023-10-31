import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';
import { GrTooltip } from 'react-icons/gr';

const TooltipHome = () => {
  const [selectedPosition, setSelectedPosition] = useState('top'); // Default position is 'top'

  const handleRadioChange = (position) => {
    setSelectedPosition(position);
  };

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

  useEffect(()=>{
    document.title="Tooltip";
    document.querySelector('link[rel="icon"]').setAttribute('href', GrTooltip());
},[])

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>
        <label>
          Select Tooltip Position:
          <br />
          <input type="radio" name="position" value="top" checked={selectedPosition === 'top'} onChange={() => handleRadioChange('top')} style={radioStyle} /> Top
          <input type="radio" name="position" value="bottom" checked={selectedPosition === 'bottom'} onChange={() => handleRadioChange('bottom')} style={radioStyle} /> Bottom
          <input type="radio" name="position" value="right" checked={selectedPosition === 'right'} onChange={() => handleRadioChange('right')} style={radioStyle} /> Right
          <input type="radio" name="position" value="left" checked={selectedPosition === 'left'} onChange={() => handleRadioChange('left')} style={radioStyle} /> Left
        </label>
      </div>
      <Tooltip position={selectedPosition} text="Thanks for hovering! I'm toolkit">
        <h4 style={headingStyle}>Hover Over Me! </h4>
      </Tooltip>
    </div>
  );
};

export default TooltipHome;
