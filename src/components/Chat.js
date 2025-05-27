import React from "react";
import "../styles/Chat.css";

const Chat = () => {
  return (
    <div className="section-container">
      <h2>Chat</h2>
      <div className="chat-box">
        <div className="message received">Hello! How can I help you?</div>
        <div className="message sent">I need help with my appointment.</div>
      </div>
    </div>
  );
};

export default Chat;
