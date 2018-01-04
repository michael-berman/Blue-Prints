import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropDown from './navbar_dropdown';

const sessionLinks = () => (
    <nav className="login-signup-navlinks">
      <Link to="/login">Login</Link>
      <span className="nav-pipe">|</span>
      <Link to="/signup">Sign up</Link>
    </nav>
);

const personalAvatar = (currentUser, logout) => (
  <header className="header-group">
    <h2 className="header-name">{currentUser.username}</h2>
  </header>
)

const NavBar = ({currentUser, logout}) =>{
  return (
    <section className="nav-bar">
      <h1>Blue Prints</h1>
      {currentUser ? personalAvatar(currentUser, logout) : sessionLinks()}
    </section>
  )
};

export default NavBar;
