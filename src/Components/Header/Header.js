import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrowImage from "../../assets/images/arrow.png";
import searchImage from "../../assets/images/search.png";
import Search from "../Search/Search";
import "./Header.scss";

const Header = ({history}) => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleMenuOpen = (e) => {
    setOpen(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  }
  const handleOpenSearch = () => {
    setOpenSearch(true);
  }

  const handleMenuClose = (e) => {
    if(e.target.tagName === 'DIV'){
      setOpen(false);
    }
  };

  return (
    <header className="wrapper-header">
      <div className="container-fluid">
        <nav className="nav">
          <div className={open ? "nav-wrapper open" : "nav-wrapper"} onClick={handleMenuClose}>
            <ul className={open ? "open" : ""}>
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">
                Сategories
                <img src={arrowImage} />
                <ul className="dropdown-menu">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                  <li>Link 5</li>
                </ul>
              </NavLink>
              <NavLink to="#">Social</NavLink>
              <NavLink to="#">
                Features
                <img src={arrowImage} />
                <ul className="dropdown-menu">
                  <li>Left Sidebar Post</li>
                  <li>Fullwidth Post</li>
                  <li>Right Sidebar Post</li>
                </ul>
              </NavLink>
              <NavLink to="#">Blog</NavLink>
              <NavLink to="#">Download</NavLink>
              <a className="search">
                <img src={searchImage} onClick={handleOpenSearch}/>
              </a>
            </ul>
          </div>

          <div className="hamburger" onClick={handleMenuOpen}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <NavLink to="/admin" className="admin-padnel-link">Admin Panel</NavLink>
        </nav>
      </div>

      <div className="container header-bottom">
        <h1>Loredana Celebre</h1>
      </div>
      <Search open={openSearch} close={handleCloseSearch}/>
    </header>
  );
};

export default Header;
