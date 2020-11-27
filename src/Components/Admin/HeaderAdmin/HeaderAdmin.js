import React from "react";
import {NavLink} from 'react-router-dom';
import "./HeaderAdmin.scss";

const HeaderAdmin = ({handleOpenMenu}) => {


  return (
    <header className="admin-header">
      <nav className="main-header">
            <div className="burgger" onClick={handleOpenMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </div>
            <div className="link-my-site">
                <NavLink to="/main">My site</NavLink>
            </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
