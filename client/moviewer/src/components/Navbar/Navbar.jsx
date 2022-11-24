import React from "react";
import { Link, NavLink } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import "./Navbar.css";

const NavBar = () => {
  const { handleLogout, user } = useUser();


  let nav = user ? (
    // IF SIGNED IN
    <div className="navBar-logged-in">
      <NavLink
        to=""
        className="navBar-logout"
        onClick={handleLogout}
        style={{ color: "#BCBCBC" }}
      >
        Log out
      </NavLink>

      <Link
        to={`/profile/${user._id}`}
        className="user-name"
        style={{ color: "#BCBCBC" }}
      >
        {user.name}
      </Link>

    </div>
  ) : (
    //IF SIGNED OUT
    <div>
      <NavLink
        to="/login"
        className="navBar-login"
        style={{ color: "gold" }}
      >
        Log in
      </NavLink>

      <NavLink
        to="/signup"
        className="navBar-signup"
        style={{ color: "gold" }}
      >
        Sign up
      </NavLink>
    </div>
  );



  return (
    <>
      <div className="navBar">

        <div className="navBar-left">
          {nav}
        </div>

        <Link to="/" style={{ color: "gold" }}>
          <h1 className="moviewer">Moviewer</h1>
        </Link>

          <Link to='/cart'>
            <h2 className="create-blog">Cart</h2>
          </Link>
      </div>
      <div>
        <input className="searchbar"></input>
      </div>
    </>
  );
};

export default NavBar;
