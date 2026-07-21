import React, { useState, useRef, useEffect } from 'react';
import './ChatPopup.css';
import { API_URL } from './config';

const ChatPopup = ({ isVisible, onClose }) => {
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatContentRef = useRef(null);

  const prompts = [
    "What is Datapulse?",
    "How do I track my profit?",
    "How do I check for international shipping?",
    "What products are top-rated?"
  ];

  const addToConversation = (message, sender = 'user') => {
    const newMessage = { type: sender, message };
    setConversation(prev => [...prev, newMessage]);
    if (sender === 'user') {
      fetch(`${API_URL}/generate_text`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      })
        .then(response => response.json())
        .then(data => {
          setConversation(prev => [...prev, { type: 'AI', message: data.text }]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [conversation]);

  if (!isVisible) return null;

  return (
    <div className={`chat-popup ${isVisible ? 'open' : ''}`}>
      <div className="chat-header">
        <button className="close-chat-btn" onClick={onClose}>Close</button>
      </div>
      <div className="chat-container">
        <div ref={chatContentRef} className="chat-content">
          {conversation.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>{msg.message}</div>
          ))}
        </div>
        <div className="chat-prompts">
          {prompts.map((prompt, idx) => (
            <button key={idx} className="prompt-btn" onClick={() => addToConversation(prompt, 'user')}>{prompt}</button>
          ))}
        </div>
        <form onSubmit={(event) => {
          event.preventDefault();
          addToConversation(userInput);
          setUserInput('');
        }} className="message-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPopup;
