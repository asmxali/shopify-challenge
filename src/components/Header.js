import React from "react";
import "../styles/Header.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Header({ email }) {
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <h1 className="header__title">NOTflix</h1>

      <div className="header__userInfo">
        {user && (
          <div className="header__userEmailLineOne">
            Welcome,
            <div className="header__userEmailLineTwo">
              {user ? `${email}` : "Guest"}
            </div>
          </div>
        )}

        <Link to="/login">
          <button
            className="header__signOutButton"
            onClick={handleAuthentication}
          >
            {user ? "Log Out" : "Log In"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
