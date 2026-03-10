import React, { useState } from "react";

const WhatsAppChat = () => {
  const ADMIN_NUMBER = "7061609072"; // ← Replace with your admin WhatsApp number
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openWhatsApp = () => {
    const finalMessage = message || "Hello! I need some help.";
    const url = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 10000,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </div>

      {/* Popup Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            zIndex: 10000,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ margin: 0 }}>Chat with Support</h4>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ×
            </button>
          </div>

          <p style={{ marginTop: "10px", color: "#555" }}>
            Hi! 👋 How can we help you?
          </p>

          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              height: "80px",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />

          <button
            onClick={openWhatsApp}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Start Chat
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
