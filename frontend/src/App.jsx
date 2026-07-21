import React, { useState, useEffect } from 'react';
import './App.css';
import ChatPopup from './ChatPopup'; // Ensure ChatPopup component is defined
import DropdownMenu from './DropdownMenu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './aboutUs'; // Ensure this component exists and is correctly imported
import './sales_forcast';
import SalesForecast from './sales_forcast';
import SimilarProductPrediction from './similar_product_prediction'; // Ensure this component exists and is correctly imported

const App = () => {
  const [isAIFormVisible, setAIFormVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleAIForm = () => setAIFormVisible(!isAIFormVisible);
  const toggleDarkMode = (checked) => setDarkMode(checked);

  // Handler for dropdown selection
  const handleDropdownSelect = (option) => {
    console.log("Selected option:", option);
    // Implement what happens when an option is selected
    // For example, update state, make API calls, etc.
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/sales_forcast">Sales Forecast</Link>
          <Link to="/similar_product_prediction">Similar Product Prediction</Link>
          <DarkModeSwitch style={{ marginBottom: '2rem' }} checked={isDarkMode} onChange={toggleDarkMode} size={30} />
        </nav>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/sales_forcast" element={<SalesForecast/>} />
          <Route path="/similar_product_prediction" element={<SimilarProductPrediction />} />
          <Route path="/" element={
            <>
              <main>
                <h1>DATAPULSE</h1>
                <p>The RFM (Recency, Frequency, Monetary) function is designed to analyze customer behavior by segmenting customers based on their transaction history. It evaluates how recently a customer made a purchase (Recency), how often they make purchases (Frequency), and how much they spend (Monetary). This segmentation allows businesses to identify valuable customer segments for targeted marketing strategies, loyalty programs, and personalized communication. By understanding customer purchasing habits, businesses can enhance customer engagement, increase retention, and maximize profitability.</p>
                <div className="dropdown-container">
                  <DropdownMenu onSelect={handleDropdownSelect} title="Menu 1" />
                 {/*
                  <DropdownMenu onSelect={handleDropdownSelect} title="Menu 2" />
                  <DropdownMenu onSelect={handleDropdownSelect} title="Menu 3" /> 
          */ }
                </div>
                <section className="app-section">
                  <div className="graph-container">
                    <div id="scatterplot-container1" className="graph">
                      <h3>RFM Analysis</h3>
                    </div>
                  </div>
                </section>
              </main>
              <button className="chat-toggle-btn" onClick={toggleAIForm}>
                {isAIFormVisible ? 'Close Chat' : 'Chat with Us'}
              </button>
              <ChatPopup isVisible={isAIFormVisible} onClose={toggleAIForm} />
            </>
          } />
        </Routes>
        <footer className="app-footer">
          <p>&copy; 2023 DATAPULSE. All rights reserved.</p>
          <p>Contact us at info@datapulse.com</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
