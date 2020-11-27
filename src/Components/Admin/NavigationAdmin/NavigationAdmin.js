import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationAdmin.scss";

const NavigationAdmin = ({ isActiveMenu, handleCloseMenu }) => {
  return (
    <aside className={isActiveMenu ? "admin-sidebar active" : "admin-sidebar"} onClick={handleCloseMenu}>
      <div className={isActiveMenu ? "wrapper-sidebar active" : "wrapper-sidebar"} >
        <NavLink to="#" className="brand-link">
          <span>AdminLTE 3</span>
        </NavLink>
        <div className="sidebar">
          <div className="user-panel">
            <div className="image"></div>
            <div className="info">
              <p>Loredana Celebre</p>
            </div>
          </div>
          <ul className="nav-sidebar">
            <NavLink to="/admin/posts" className="nav-item">
              Manage Posts
            </NavLink>
            <NavLink to="/admin/topics" className="nav-item">
              Manage Topics
            </NavLink>
            <NavLink to="/admin/users" className="nav-item">
              Manage Users
            </NavLink>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default NavigationAdmin;
