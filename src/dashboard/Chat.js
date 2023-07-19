import React, { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function formatTransaction(transaction) {
  return `On ${transaction.date}, there was a ${transaction.type} transaction of ${transaction.amount} with the description "${transaction.description}".`;
}

const Chat = ({ transactions, finalBalance }) => { // receive finalBalance as a prop
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I am ChatGPT',
      sender: 'ChatGPT'
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: 'user',
      direction: 'outgoing'
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages, transactions, finalBalance); // pass finalBalance to the function
  };

  async function processMessageToChatGPT(chatMessages, transactions, finalBalance) { // receive finalBalance as an argument
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
        <MainContainer>
          <ChatContainer>
            <MessageList scrollBehavior="smooth" typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}>
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Send a message" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chat;