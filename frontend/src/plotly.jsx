import React, { useState, useEffect } from 'react';
import './App.css';
import ChatPopup from './ChatPopup';
import Scatterplot from './Scatterplot'; // Import the Scatterplot component
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-dist';


const App = () => {
  const [data, setData] = useState([]);
  const [isAIFormVisible, setAIFormVisible] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch data from data.json
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  const toggleAI = () => {
    setAIFormVisible(!isAIFormVisible);
  };

  const handleDropdownSelect = (option) => {
    // Handle the selected option here
    console.log('Selected option:', option);
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <>
      <nav>
        <a href="/home">Home</a>
        <a href="/settings">Settings</a>
        <a href="/profiles">Profiles</a>
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </nav>
      <main>
        <h1>DATAPULSE</h1>
        <section>
          <div className="dropdown-container">
            <DropdownMenu onSelect={handleDropdownSelect} />
          </div>
          <div className="graph-container">
            {/* Scatterplot 1 */}
            <div id="scatterplot-container1" className="graph">
              <h3>Scatterplot 1</h3>
              {/* Replace Scatterplot2 component with Scatterplot */}
              <Scatterplot data={data} />
              {isAIFormVisible && <ChatPopup />}
            </div>
            {/* Plotly.js plot */}
            <div id="plotly-container" className="graph">
              <h3>Plotly.js Plot with Line</h3>
              <Plot
                data={[
                  { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+markers', marker: { color: 'red' } },
                  { x: [1, 2, 3], y: [2, 4, 6], type: 'scatter', mode: 'lines', line: { color: 'blue' } }
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
