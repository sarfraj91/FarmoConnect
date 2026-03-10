// AdminDashboard.jsx
import React from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <AdminNavbar />

      {/* Header */}
      <div className={styles.header}>
        <h2>Welcome Admin 👨‍🌾</h2>
        <p>Manage farmers, products and orders at one place.</p>
      </div>

      {/* Cards Section */}
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>3</h3>
          <p>Registered Farmers</p>
        </div>

        <div className={styles.card}>
          <h3>2</h3>
          <p>Pending Product Approvals</p>
        </div>

        <div className={styles.card}>
          <h3>12</h3>
          <p>Orders This Week</p>
        </div>

        <div className={styles.card}>
          <h3>₹8,560</h3>
          <p>Total Transactions</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className={styles.tableSection}>
        <h3>Recent Orders</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Farmer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#ORD2541</td>
              <td>Sarfaraj Alam</td>
              <td>Tractor</td>
              <td className={styles.approved}>Approved</td>
              <td>₹2,500</td>
            </tr>

            <tr>
              <td>#ORD2542</td>
              <td>Md Saif Ali</td>
              <td>Harvestor</td>
              <td className={styles.pending}>Pending</td>
              <td>₹1,800</td>
            </tr>

            <tr>
              <td>#ORD2543</td>
              <td>Md Hafijul</td>
              <td>Cultivator</td>
              <td className={styles.rejected}>Rejected</td>
              <td>₹920</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2025 AgriBridge Admin Panel. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;
