import { signOut } from "firebase/auth";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation hook
import { auth } from "../config";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to get current location

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">De Paris Nail Spa</div>
      </Link>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Interface</div>
      <li className={`nav-item ${isActive("/profile") ? "active" : ""}`}>
        <Link className="nav-link" to="/profile">
          <i className="fas fa-fw fa-cog"></i>
          <span className={`${isActive("/profile") ? "active" : ""}`}>
            Profile
          </span>
        </Link>
      </li>

      <li className={`nav-item ${isActive("/dashboard") ? "active" : ""}`}>
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-cog"></i>
          <span className={`${isActive("/dashboard") ? "active" : ""}`}>
            Header
          </span>
        </Link>
      </li>
      <li className={`nav-item ${isActive("/footer") ? "active" : ""}`}>
        <Link className="nav-link" to="/footer">
          <i className="fas fa-fw fa-cog"></i>
          <span className={`${isActive("/footer") ? "active" : ""}`}>
            Footer
          </span>
        </Link>
      </li>
      <li className={`nav-item ${isActive("/pricess") ? "active" : ""}`}>
        <Link className="nav-link" to="/pricess">
          <i className="fas fa-fw fa-cog"></i>
          <span className={`${isActive("/pricess") ? "active" : ""}`}>
            Pricess
          </span>
        </Link>
      </li>

      <li className={`nav-item ${isActive("/gallery") ? "active" : ""}`}>
        <Link className="nav-link" to="/gallery">
          <i className="fas fa-fw fa-cog"></i>
          <span className={`${isActive("/gallery") ? "active" : ""}`}>
            Gallery
          </span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link
          className="nav-link"
          style={{
            background: "#444",
            color: "#000",
          }}
          to="#!"
          onClick={logout}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
