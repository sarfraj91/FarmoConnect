

import React from "react";
import Navbar from "../../Components/Navbar";
import "./FarmerHome.css";
import { ArrowRight } from "lucide-react";
import WhatsAppChat from '../../Components/WhatsAppChat'; 
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../consumers/ConsumerHome.module.css';


const FarmerHome = ({ onNavigate = () => {} }) => {
  return (
    <div className="provider-home-page">
      <Navbar />

      {/* Hero / Intro */}
      <header className="provider-hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="badge">Provider • Equipment on Rent</div>
            <h1>
              Rent Agricultural Equipment, <span>Earn More</span>
            </h1>
            <p className="lead">
              Provide tractors, harvesters and farm machines to farmers nearby — manage listings,
              accept bookings and grow your rental business.
            </p>

            <div className="hero-ctas">
              {/* <button className="btn btn-primary" onClick={() => onNavigate("products")}>
                Add Equipment <ArrowRight size={16} />
              </button> */}

               <Button
                        component={Link}
                        to="/products"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.ctaButton}
                    >
                         Add Equipment <ArrowRight size={16} />
                    </Button>
             
            </div>

            <ul className="quick-stats">
              <li>
                <strong>120+</strong>
                <span>Local Reach</span>
              </li>
              <li>
                <strong>250+</strong>
                <span>Bookings</span>
              </li>
              <li>
                <strong>₹ 1.2L</strong>
                <span>Last 30 days</span>
              </li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <div className="card-title">Quick Actions</div>
              <div className="card-sub">Add or manage equipment in seconds</div>
            </div>

            <div className="card-body">
              <div className="action-row">
                <button className="small-btn" onClick={() => onNavigate("add-equipment")}>+ Add Listing</button>
                <button className="small-btn outline" onClick={() => onNavigate("my-equipment")}>My Listings</button>
              </div>

              <div className="mini-stats">
                <div>
                  <div className="num">8</div>
                  <div className="lbl">Active Listings</div>
                </div>
                <div>
                  <div className="num">3</div>
                  <div className="lbl">Pending Requests</div>
                </div>
                <div>
                  <div className="num">₹ 12,400</div>
                  <div className="lbl">This Month</div>
                </div>
              </div>

              <div className="sample-equip">
                
                <div className="equip-info">
                  <div className="name">Mahindra 575 DI (Tractor)</div>
                  <div className="price">₹ 1200 / hr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features / Benefits */}
      <section className="provider-features">
        <div className="container">
          <h2>Why Providers Choose Us</h2>
          <p className="subtitle">Tools designed to grow your rental business and reduce downtime</p>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🔧</div>
              <h4>Easy Listings</h4>
              <p>Upload equipment details, availability and transparent pricing.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">📅</div>
              <h4>Booking Calendar</h4>
              <p>Smart calendar shows confirmed and pending bookings at a glance.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">💳</div>
              <h4>Secure Payments</h4>
              <p>Automatic settlements, invoices and GST-ready records.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">📈</div>
              <h4>Analytics</h4>
              <p>Monthly earnings, utilization and best-performing regions.</p>
            </div>
          </div>
        </div>
      </section>

     

     <WhatsAppChat />
    </div>
  );
};

export default FarmerHome;
