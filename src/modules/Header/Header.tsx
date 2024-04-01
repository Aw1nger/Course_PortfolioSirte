import React from "react";
import { Navbar } from "react-bootstrap";
import "./header.scss";
import { NavLink } from "../../components/Links/links";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="container d-flex justify-content-between navbar-expand-lg">
          <div className="header__logo" onClick={() => window.scrollTo(0, 0)}>
            <img src="" alt="" className="header__logo-img" />
            <h3 className="header__title">Aw1nger</h3>
          </div>
          <div className="">
            <Navbar.Toggle aria-controls="header-nav">PYK</Navbar.Toggle>
            <Navbar.Collapse id="header-nav">
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <NavLink to="/">PYK</NavLink>
                  </li>
                </ul>
              </nav>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
