import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropdown from './navbar_dropdown';


class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  sessionLinks(){
    if(this.props.currentUser){
      return (
        <NavBarDropdown currentUser={this.props.currentUser}
          logout={this.props.logout} />
      )
    } else {
      return (
        <nav className="login-signup-navlinks">
          <Link to="/login">Login</Link>
          <span className="nav-pipe">|</span>
          <Link to="/signup">Sign up</Link>
        </nav>
      )
    }
  }

  render() {
    return (
      <section className="nav-bar">
        <Link to="/" >
          <header className="nav-bar-logo" >
            <img src="https://i.imgur.com/z6QvKJq.png" />
            <h1>Blue Prints</h1>
          </header>
        </Link>
        {this.sessionLinks()}
      </section>
    )
  }
};

export default NavBar;
