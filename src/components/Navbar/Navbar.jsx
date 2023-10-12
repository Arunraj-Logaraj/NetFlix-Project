import React from "react";
import { Outlet } from "react-router-dom";
import NetFlixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={NetFlixLogo} alt="NetFlix" />
        </div>

        <div className="navbar-select">
          <select name="" id="">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <button onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
