import React from "react";
import "./TopNav.scss";
import NetFlixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate();

  function SignOutButton() {
    signOut(firebaseAuth);
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div
      className={`container-topNav ${isScrolled ? "notScrolled" : "scrolled"} `}
    >
      <div className="topNav-List">
        <div className="topNav-logo">
          <img
            src={NetFlixLogo}
            alt="NetFlixLogo"
            width="200px"
            height="100px"
          />
        </div>
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/hero");
            }}
          >
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Tv Show</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/myList");
            }}
          >
            <a href="">My List</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
        </ul>
      </div>

      <div className="topNavButton">
        <button onClick={SignOutButton}>Log Out</button>
      </div>
    </div>
  );
};

export default TopNav;
