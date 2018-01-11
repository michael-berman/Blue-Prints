import React from 'react';

import { Link } from 'react-router-dom';

class NavBarDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggled: true }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.dropdownMenu = this.dropdownMenu.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.redirectNew = this.redirectNew.bind(this);
  }

  toggleMenu(){
    if (this.state.toggled){
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true })
    }
  }

  toggleOff(){
    this.setState({ toggled: true })
  }

  redirectNew(){
    this.setState({ toggled: true })
    this.props.history.push('/projects/new')
  }

  dropdownMenu(){
    if(this.state.toggled){
      return null;
    } else {
      return (
        <nav className="dropdown-menu">
          <div className="show-logout-section-nav" >
            <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
            <Link to={`/users/${this.props.currentUser.id}`}
              className="user-show-link-nav"
              onClick={this.toggleOff}>Profile</Link>
            <button className="logout-btn-nav"
              onClick={this.props.logout}>Logout</button>
          </div>
          <div className="nav-dropdown-divider"></div>
          <div className="create-btn-nav-container">
            <button className="create-project-button-nav"
              onClick={this.redirectNew}>
              New Blue Print
            </button>
          </div>
        </nav>
      )
    }
  }

  render(){
    return (
      <div>
        <nav className="dropdown-btn" onClick={this.toggleMenu}>
          <img src={`${this.props.currentUser.image_url}`}/>
          <span>{this.props.currentUser.username}</span>
        </nav>
        {this.dropdownMenu()}
      </div>
    )
  }
}


export default NavBarDropdown;
