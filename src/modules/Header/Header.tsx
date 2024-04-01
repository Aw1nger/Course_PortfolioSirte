import React from "react";
import { Navbar } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import { NavLink } from "../../components/Links/links";

const Header = () => {
  const path = window.location.pathname;
  return (
    <header className="header shadow sticky-top">
      <Navbar expand="xl">
        <div
          className="container"
          itemScope
          itemType="http://www.schema.org/SiteNavigationElement"
        >
          <div className="header__logo">
            {path === "/" ? (
              <img
                src={process.env.PUBLIC_URL + "/image/aw1nger_logo.png"}
                alt="logo"
                className="header__logo-img"
              />
            ) : (
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/image/aw1nger_logo.png"}
                  alt="logo"
                  className="header__logo-img"
                />
              </Link>
            )}
          </div>
          <Navbar.Toggle
            className="header__navbar-btn d-block d-xl-none"
            aria-controls="HeaderNavId"
          >
            <i className="fa fa-outdent" aria-hidden="true"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="HeaderNavId" className="justify-content-end">
            <div className="d-xl-flex justify-content-between">
              <ul className="header__navbar navbar-nav m-3 m-xl-0">
                <li className="nav-item">
                  <NavLink to="/" itemProp="url">
                    Обо Mнe
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" itemProp="url">
                    Сервис
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" itemProp="url">
                    Работы
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" itemProp="url">
                    Свяжись со Mной
                  </NavLink>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
