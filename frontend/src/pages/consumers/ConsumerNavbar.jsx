

import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Badge,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../assets/logo.png";
import styles from "./ConsumerNavbar.module.css";

const ConsumerNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Load Google Translate (same as Farmer Navbar)
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>

        {/* LOGO */}
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="Logo"
            className={styles.logo}
            onClick={() => navigate("/consumer")}
          />
          <span className={styles.title}>Farmer Panel</span>
        </div>



        















        {/* NAV LINKS */}
        <div className={styles.navLinks}>
          <Link
            to="/consumer"
            className={`${styles.navItem} ${
              location.pathname === "/consumer" ? styles.active : ""
            }`}
          >
            <HomeIcon /> Home
          </Link>

          <Link
            to="/consumer/products"
            className={`${styles.navItem} ${
              location.pathname === "/consumer/products" ? styles.active : ""
            }`}
          >
            <StorefrontIcon /> Equipments
          </Link>

          <Link
            to="/consumer/orders"
            className={`${styles.navItem} ${
              location.pathname === "/consumer/orders" ? styles.active : ""
            }`}
          >
            <ReceiptLongIcon /> Orders
          </Link>

          <Link
            to="/consumer/cart"
            className={`${styles.navItem} ${
              location.pathname === "/consumer/cart" ? styles.active : ""
            }`}
          >
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
            Cart
          </Link>

          <Link
            to="/consumer/feedback"
            className={`${styles.navItem} ${
              location.pathname === "/consumer/feedback" ? styles.active : ""
            }`}
          >
            <FeedbackIcon /> Feedback
          </Link>

          <Link
            to="/consumer/profile"
            className={`${styles.navItem} ${
              location.pathname === "/consumer/profile" ? styles.active : ""
            }`}
          >
            <PersonIcon /> Profile
          </Link>

          {/* GOOGLE TRANSLATE */}
          <div className={styles.translateWidget}>
            <div id="google_translate_element"></div>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <Button
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
          className={styles.logoutBtn}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ConsumerNavbar;
