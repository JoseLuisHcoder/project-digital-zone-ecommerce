import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="header__icons">
          <li className="header__icon-title">
            <Link to="/">
              <span className="header__icon-ecommerce">e-commerce</span>
            </Link>
          </li>
          <li className="header__icon-home" to="/">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-home"></i>

              <p className="header__icon-p">Home</p>
            </NavLink>
          </li>
          <li className="header__icon-login">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/login"
            >
              <i className="bx bx-user"></i>
              <p className="header__icon-p">Login</p>
            </NavLink>
          </li>
          <li className="header__icon-purchase">
            <NavLink
              to="/purchases"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-box"></i>
              <p className="header__icon-p">Purchases</p>
            </NavLink>
          </li>
          <li className="header__icon-cart">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-cart"></i>
              <p className="header__icon-p">Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
