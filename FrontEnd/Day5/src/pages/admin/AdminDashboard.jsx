// AdminDashboard.jsx
import '../../assets/css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1>Welcome to Admin Dashboard</h1>
      <div className="admin-widgets">
        <div className="widget">
          <h2>Total Users</h2>
          <p>1000</p>
        </div>
        <div className="widget">
          <h2>Revenue</h2>
          <p>$1,000,000</p>
        </div>
        <div className="widget">
          <h2>Orders</h2>
          <p>500</p>
        </div>
        <div className="widget">
          <h2>Products</h2>
          <p>200</p>
        </div>
        <div className="widget">
          <h2>Messages</h2>
          <p>50</p>
        </div>
      </div>
      <div className="admin-actions">
        <button className="action-button">Manage Users</button>
        <button className="action-button">View Reports</button>
        <button className="action-button">Settings</button>
        <button className="action-button">Add Product</button>
        <button className="action-button">Send Announcement</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
