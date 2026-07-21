import React, { useState } from 'react';
import 'plotly.js-dist/plotly'; // Import the Plotly library
import Plotly from 'plotly.js-dist'; // Using Plotly directly for dynamic plots
import { API_URL } from './config';


const DropdownMenu = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option); // Pass the selected option to the parent component


    // send a post request to the analytics backend
    fetch(`${API_URL}/create_rfm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ option }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        Plotly.newPlot('scatterplot-container1', data, { title : 'RFM Analysis' });

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedOption || 'Select Option'}</button>
      <div className="dropdown-content">
        <a onClick={() => handleOptionClick('customer_id')}>Customer ID</a>
        <a onClick={() => handleOptionClick('state')}>State</a>
        <a onClick={() => handleOptionClick('city')}>City</a>
        <a onClick={() => handleOptionClick('segment')}>Segment</a>
        <a onClick={() => handleOptionClick('ship_mode')}>Ship Mode</a>
        <a onClick={() => handleOptionClick('category')}>Category</a>
        <a onClick={() => handleOptionClick('sub_category')}>Sub-category</a>
      </div>
    </div>
  );
};

export default DropdownMenu;