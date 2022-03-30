import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import logo from "../assets/images/logo.svg";
import xMark from "../assets/images/x-mark.svg";
import { logOutAction } from "../store/actionsCreators/userActions";
import AuthService from "../services/AuthService";

function Header(props) {
  const menuRef = useRef(null);
  const xMarkRef = useRef(null);
  const itemRef = useRef(null);

  const user = useSelector(({ user }) => user);
  const headerMenu = useSelector(({ headerMenu }) => headerMenu.headerMenu);
  const dispatch = useDispatch(user);

  function Logo(props) {
    return (
      <a href="#">
        <img className="logo" src={logo} alt="logo"></img>
      </a>
    );
  }

  const logOut = () => {
    const response = AuthService.logout();
    localStorage.removeItem("token");
    dispatch(logOutAction());
  };

  function MenuList() {
    return (
      <ul className={`menu__list`} ref={menuRef}>
        {headerMenu.map(({ title, dropdown, href }, index) => {
          return dropdown ? (
            <li className="menu__items" onClick={toggleMenuItem} key={index}>
              <div className="dropdown">
                <span className="dropbtn">{title}</span>
                <NavArrow />
              </div>
              <DropdownContent content={dropdown} />
            </li>
          ) : (
            <li className="menu__items" key={index}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
        <li className="menu__items">
          {user.isLogin ? (
            <a href="#" onClick={logOut}>
              logout
            </a>
          ) : (
            <Link to="/login" className="login__btn">
              login
            </Link>
          )}
        </li>
      </ul>
    );
  }

  function NavArrow() {
    return (
      <div className="arrow">
        <div className="nav-arrow" />
      </div>
    );
  }

  function DropdownContent({ content }) {
    return (
      <div className="dropdown-content">
        {content.map(({ href, text }, index) => {
          return (
            <a key={index} href={href}>
              {text}
            </a>
          );
        })}
      </div>
    );
  }

  const toggleMenuItem = (e) => {
    if (window.screen.width <= 900) {
      let menuItem = e.target.offsetParent;
      let dropdownContent = e.target.offsetParent.lastChild;

      if (!menuItem.classList.contains("active")) {
        for (let elements of e.target.offsetParent.offsetParent.childNodes) {
          let dropdownContent = elements.lastChild;
          elements.classList.remove("active");
          dropdownContent.style.maxHeight = null;
        }
      }

      menuItem.classList.toggle("active");
      if (dropdownContent.style.maxHeight) {
        dropdownContent.style.maxHeight = null;
      } else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
      }
    }
  };

  const changeDropDown = () => {
    menuRef.current.classList.toggle("active");
    xMarkRef.current.classList.toggle("active");
  };

  function XMark() {
    return (
      <div className={`x-mark`} onClick={changeDropDown} ref={xMarkRef}>
        <img className="controller" src={xMark} alt="x-mark"></img>
      </div>
    );
  }

  function Burger() {
    return (
      <div className="burger controller" onClick={changeDropDown}>
        <div className="burger__bar"></div>
        <div className="burger__bar"></div>
        <div className="burger__bar"></div>
      </div>
    );
  }

  return (
    <header>
      <div className="container">
        <Logo />
        <MenuList />
        <Burger />
        <XMark />
      </div>
    </header>
  );
}

export default Header;
