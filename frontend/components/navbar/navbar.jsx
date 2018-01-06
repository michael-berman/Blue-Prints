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
        <Link to="/" className="nav-bar-home-link">
          <header className="nav-bar-logo" >
            <img src="https://i.imgur.com/z6QvKJq.png" />
            <h1>Blue Prints</h1>
          </header>
        </Link>
        <form className='nav-bar-search'>
          <input className='nav-bar-search-text' type='text'
            placeholder="Let's make ..." />
          <button className="nav-bar-search-button">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </form>
        <button className='nav-bar-create-button'><Link to="/projects/new">Write a Blue Print</Link></button>
        <div className="nav-bar-session">
          {this.sessionLinks()}
        </div>
      </section>
    )
  }
};

export default NavBar;
