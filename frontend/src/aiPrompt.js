import React, { useState } from 'react';
import Collapse from 'react-collapse';

const PromptBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePrompt = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>AI Prompt</h2>
      <button onClick={togglePrompt}>{isOpen ? 'Minimize' : 'Expand'}</button>
      <Collapse isOpened={isOpen}>
        <div>
          <p>Enter your AI to get info</p>
          <form id="AIForm">
            <div className="form-group">
              <label htmlFor="AI">AI</label>
              <input type="text" id="AI" name="AI" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Collapse>
    </div>
  );
};

export default PromptBox;
