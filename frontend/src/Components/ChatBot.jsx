import React, { useState, useRef } from "react";
import axios from "axios";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm FarmoConnect Assistant 🤖. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // 🔒 HARD GLOBAL LOCK (Prevents duplicate requests 100%)
  const requestLock = useRef(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 🔥 Duplicate prevention
    if (requestLock.current) return;
    requestLock.current = true;

    // Send user message
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const userText = input;
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userText,
      });

      const botMsg = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error, try again." },
      ]);
      console.error(err);
    }

    // unlock
    requestLock.current = false;
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "25px",
          backgroundColor: "#1976D2",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          cursor: "pointer",
          fontSize: "30px",
          zIndex: 10000,
        }}
      >
        💬
      </div>

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "170px",
            right: "25px",
            width: "330px",
            height: "420px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px",
              background: "#1976D2",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <strong>FarmoConnect AI Assistant</strong>
            <span style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>
              ✖
            </span>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    background: msg.sender === "user" ? "#E3F2FD" : "#F1F1F1",
                    borderRadius: "10px",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#1976D2",
                color: "#fff",
                border: "none",
                padding: "10px 14px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
