import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import "./style/navbar.css";
import {
  faHome,
  faList,
  faCog,
  faSignIn,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../Context/Usercontext";
const Navbar = () => {
  const {
    formFields,
    setFormFields,
    setUser,
    setUsername,
    setEmail,
    setPassword,
    setCpassword,
  } = useUser();
  const { username, email, password, cpassword } = formFields;

  const isLoggedIn = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUser("");
  };

  const links = isLoggedIn
    ? [
        {
          name: "Home",
          path: "/home",
          icon: faUserAlt,
        },
        {
          name: "Recipes",
          path: "/recipes",
          icon: faUserAlt,
        },
        {
          name: "Logout",
          onClick: handleLogout,
        },
        {
          name: "profile",
          path: "/login",
          icon: faSignIn,
        },
      ]
    : [
        {
          name: "Sign Up",
          path: "/signup",
          icon: faUserAlt,
        },
        {
          name: "Log In",
          path: "/login",
          icon: faSignIn,
        },
      ];

  const [showsideBar, setsideBar] = useState(false);

  const hideSidebar = () => {
    setsideBar(false);
  };

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          Epic<span>Eat</span>ery
        </Link>
        <div className="nav-links">
          {links.map((link) =>
            link.path ? (
              <Link to={link.path} key={link.name}>
                {link.name}
              </Link>
            ) : (
              <button className="navBtn" onClick={link.onClick} key={link.name}>
                {link.name}
              </button>
            )
          )}
        </div>
        <div onClick={() => setsideBar(!showsideBar)} className="sidebar-btn">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showsideBar && <Sidebar links={links} hideSidebar={hideSidebar} />}
    </>
  );
};

export default Navbar;
