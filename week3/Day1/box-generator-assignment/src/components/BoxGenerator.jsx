
import React, { useState } from 'react';
import styles from './BoxGenerator.module.css';



const BoxGenerator = () => {
  // State variables
  const [color, setColor] = useState(''); // Store the color input value
  const [size, setSize] = useState(''); // Store the size input value
  const [boxes, setBoxes] = useState([]); // Store an array of boxes

  // Event handler for color input change
  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the color state with the new value
  };

  // Event handler for size input change
  const handleSizeChange = (e) => {
    setSize(e.target.value); // Update the size state with the new value
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new box object with the color and size from the input fields
    const newBox = {
      color: color,
      size: size
    };

    // Add the new box to the boxes state array
    setBoxes([...boxes, newBox]);

    // Clear the color and size input fields after submission
    setColor('');
    setSize('');
  };

  return (
    <div className='styles.container'>
      <form onSubmit={handleSubmit}>
        {/* Color input */}
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>

        {/* Size input */}
        <label>
          Size:
          <input type="text" value={size} onChange={handleSizeChange} />
        </label>

        {/* Submit button */}
        <button type="submit">Add Box</button>
      </form>

      {/* Render the boxes */}
      <div className='box-container'>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: box.size,
              height: box.size,
              display: 'inline-block',
              margin: '0.5rem'
            }}
            className={'styles.box'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
