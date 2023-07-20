// Chat.js
import React, { useState } from 'react';
import './chat.css';
import { ReactComponent as SendIcon } from '../assets/images/paper-plane-svgrepo-com.svg';
import ReactMarkdown from 'react-markdown'; // import the library

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function formatTransaction(transaction) {
  return `On ${transaction.date}, there was a ${transaction.type} transaction of ${transaction.amount} with the description "${transaction.description}".`;
}

const Chat = ({ transactions, finalBalance }) => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I will be your assistant. Please upload a CSV file with your banking statements and ask me anything!',
      sender: 'ChatGPT'
    }
  ]);

  const [messageInput, setMessageInput] = useState('');

  const handleSend = async () => {
    if(messageInput.trim() === '') return; // prevent sending empty messages

    const newMessage = {
      message: messageInput,
      sender: 'user'
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setMessageInput('');

    setTyping(true);

    await processMessageToChatGPT(newMessages, transactions, finalBalance);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  async function processMessageToChatGPT(chatMessages, transactions, finalBalance) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const transactionMessages = transactions.map(formatTransaction).join(' ');

    const systemMessage = {
      role: 'system',
      content: `Explain like a financial consultant and be very clear about any steps or advice. The final account balance is ${finalBalance}. Transaction history: ${transactionMessages}`
    };

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages]
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT'
          }
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="col-12">
      <div className="dash-AI-card6">
        <h2 className="dash-card-title">Ai</h2>
        <div className="Dash-AI-Title-Con">
          <p className="ChartTitle">Your Personal Financial Assistant</p>
        </div>
        <div className="chat-container">
          <div className="messages">
            {messages.map((message, i) => (
              <div key={i} className={`message ${message.sender}`}>
                <div className="bubble"><ReactMarkdown>{message.message}</ReactMarkdown></div> {/* use ReactMarkdown here */}
              </div>
            ))}
            {typing && <div>ChatGPT is typing...</div>}
          </div>
          <div className="input-container">
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={handleSend}><SendIcon className="sendIcon"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
