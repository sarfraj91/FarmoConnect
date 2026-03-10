import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import agribridgeLogo from "../assets/logo.png"
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={agribridgeLogo} alt="AgriBridge Logo" className="logo" />
        <h1>FarmoConnect</h1>
        <p className="subtitle">Bridging Farmers and Provider, Directly</p>
        <div className="button-group">
          {/* Consumer Login Button */}
          <Link to="/consumer-login">
            <button className="role-button "> Farmer</button>
          </Link>

          {/* Farmer Login Button */}
          <Link to="/farmer-login">
            <button className="role-button">Provider</button>
          </Link>

          {/* Admin Login Button */}
          <Link to="/admin/sarfaraj">
            <button className="role-button">Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;