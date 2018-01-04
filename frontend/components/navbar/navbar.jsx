import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropdown from './navbar_dropdown';


class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  sessionLinks(){
    if(this.props.currentUser){
      <NavBarDropdown currentUser={this.props.currentUser}
      logout={this.props.logout} />
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
        <h1>Blue Prints</h1>
        {this.sessionLinks()}
      </section>
    )
  }
};

export default NavBar;
