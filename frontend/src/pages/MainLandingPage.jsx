import React, { useState } from "react";
import {
  Sprout,
  ShoppingCart,
  MessageCircle,
  Cloud,
  Leaf,
  TrendingUp,
  CreditCard,
  BookOpen,
  MapPin,
  Microscope,
  FileText,
  Users,
  Package,
  Calendar,
  Shield,
  Bell,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import "./MainLandingPage.css";

import { Link } from "react-router-dom";
// import styles from "./AdminLogin.module.css";
import styles from "../pages/admin/AdminLogin.module.css";

const MainLandingPage = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const features = [
    {
      icon: <Users className="icon" />,
      title: "User Module",
      description:
        "Role-based sign-up for Farmers, Buyers & Admins with OTP login, KYC verification, and multilingual support",
      color: "blue",
    },
    {
      icon: <ShoppingCart className="icon" />,
      title: "Marketplace",
      description:
        "Direct marketplace with real-time bidding, smart crop suggestions, and auto-matching",
      color: "green",
    },
    {
      icon: <MessageCircle className="icon" />,
      title: "Chat & Negotiation",
      description:
        "Real-time messaging with auto-translation and price negotiation",
      color: "purple",
    },
    {
      icon: <Cloud className="icon" />,
      title: "Weather Alerts",
      description:
        "Localized forecasts, AI planting suggestions, and voice alerts",
      color: "cyan",
    },
    {
      icon: <Leaf className="icon" />,
      title: "Crop Advisory",
      description: "AI disease detection, crop schedules, and irrigation tips",
      color: "emerald",
    },
    {
      icon: <TrendingUp className="icon" />,
      title: "Live Market Rates",
      description: "Real-time mandi prices and predictive analytics",
      color: "orange",
    },
    {
      icon: <CreditCard className="icon" />,
      title: "Digital Payments",
      description: "Secure payments with UPI, invoice generation, and GST",
      color: "indigo",
    },
    {
      icon: <BookOpen className="icon" />,
      title: "Agri-Education",
      description: "Videos, articles, and quizzes in regional languages",
      color: "rose",
    },
    {
      icon: <Bell className="icon" />,
      title: "Geo-Notifications",
      description: "Location-based alerts and SMS fallback",
      color: "yellow",
    },
    {
      icon: <Microscope className="icon" />,
      title: "Soil Health",
      description: "AI crop recommendations based on soil parameters",
      color: "teal",
    },
    {
      icon: <FileText className="icon" />,
      title: "Government Schemes",
      description: "Latest schemes, subsidies, and eligibility checker",
      color: "violet",
    },
    {
      icon: <Users className="icon" />,
      title: "Community Forum",
      description: "Agri StackOverflow with expert advice",
      color: "pink",
    },
    {
      icon: <Package className="icon" />,
      title: "Input Marketplace",
      description: "Buy seeds and fertilizers from verified vendors",
      color: "amber",
    },
    {
      icon: <Calendar className="icon" />,
      title: "Smart Calendar",
      description: "Customizable reminders with Google sync",
      color: "lime",
    },
    {
      icon: <Shield className="icon" />,
      title: "Admin Panel",
      description: "Complete management and analytics dashboard",
      color: "red",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Farmers" },
    { number: "5,000+", label: "Registered Buyers" },
    { number: "50,000+", label: "Successful Deals" },
    { number: "15+", label: "Languages" },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="main-landing-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="nav-logo-icon">
              <Sprout size={24} color="white" />
            </div>
            <span className="nav-logo-text">FarmoConnect</span>
          </div>

          <div className="nav-links">
            <span
              className="nav-link"
              onClick={() =>
                document.getElementById("features").scrollIntoView()
              }
            >
              Features
            </span>
            <span
              className="nav-link"
              onClick={() => document.getElementById("about").scrollIntoView()}
            >
              About
            </span>
            <span
              className="nav-link"
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
            >
              Contact
            </span>

            

           
          </div>

          <div
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a onClick={() => setMobileMenuOpen(false)}>About</a>
            <a onClick={() => setMobileMenuOpen(false)}>Contact</a>

            <button onClick={() => onNavigate("login")}>Login</button>
            <button onClick={() => onNavigate("signup")}>Sign Up</button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <span className="highlight-badge">🌾 Empowering Agriculture</span>

            <h1 className="hero-title">
              Connect Farmers with Buyers <span>Directly</span>
            </h1>

            <p className="hero-description">
              Break free from middlemen. Get weather alerts, market rates, and
              crop advisory in your language.
            </p>

            <button className="hero-btn">
              <Link
                to="/home"
                className={styles.backLink}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Get Started Free 
              </Link>
            </button>

            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <Sprout size={32} color="white" />
                </div>
                <div>
                  <div className="hero-card-title">Smart Farming Platform</div>
                  <div className="hero-card-subtitle">AI-Powered</div>
                </div>
              </div>

              {[
                {
                  text: "Weather Alerts",
                  status: "Active",
                  icon: <Cloud size={20} />,
                },
                {
                  text: "Market Rates",
                  status: "Live",
                  icon: <TrendingUp size={20} />,
                },
                {
                  text: " Connect",
                  status: "Online",
                  icon: <MessageCircle size={20} />,
                },
                {
                  text: "Disease Detection",
                  status: "AI Ready",
                  icon: <Leaf size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="hero-feature-item">
                  <div className="hero-feature-left">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                  <span className="status-badge">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2 className="features-title">Powerful Features</h2>
          <p className="features-subtitle">Everything for modern farming</p>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className={`feature-icon-box color-${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="features-title">About FarmoConnect</h2>
          <p className="features-subtitle">
            Revolutionizing Indian agriculture
          </p>

          <div className="about-grid">
            <div className="about-left">
              <h3 className="about-heading">Our Mission</h3>

              <p>
                FarmoConnect empowers Indian farmers by connecting them directly
                to buyers.
              </p>
              <p>
                We provide market insights, weather alerts, and AI crop advisory
                in local languages.
              </p>

              <div className="about-stats">
                <div>
                  <b>2020</b>
                  <p>Founded</p>
                </div>
                <div>
                  <b>15+</b>
                  <p>States</p>
                </div>
                <div>
                  <b>24/7</b>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div className="about-right">
              <h3>Why Choose Us?</h3>

              {[
                "No middlemen - Direct connection",
                "AI-powered crop advisory",
                "Real-time weather & market data",
                "15+ languages supported",
                "Secure digital payments",
                "Free educational resources",
              ].map((text, i) => (
                <div key={i} className="about-point">
                  <CheckCircle className="about-icon" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="features-title">Get In Touch</h2>
          <p className="features-subtitle">We're here to help you succeed</p>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div className="contact-icon green">
                  <MapPin size={24} />
                </div>
                <div>
                  <b>Address</b>
                  <p>123 Agriculture Plaza, New Delhi, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon blue">
                  <Phone size={24} />
                </div>
                <div>
                  <b>Phone</b>
                  <p>+91 1800-123-4567 (Toll Free)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon purple">
                  <Mail size={24} />
                </div>
                <div>
                  <b>Email</b>
                  <p>support@farmoconnect.in</p>
                </div>
              </div>

              <div className="social-row">
                <Facebook />
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <h3>Send Message</h3>

              <label>Name *</label>
              <input
                required
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
              />

              <label>Email *</label>
              <input
                required
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />

              <label>Phone</label>
              <input
                value={contactForm.phone}
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
              />

              <label>Message *</label>
              <textarea
                required
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
              ></textarea>

              <button className="contact-submit">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Sprout size={36} color="#22c55e" />
        <p className="footer-text">
          Empowering farmers, connecting communities.
        </p>
        <div className="footer-small">
          © 2024 FarmoConnect — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLandingPage;
