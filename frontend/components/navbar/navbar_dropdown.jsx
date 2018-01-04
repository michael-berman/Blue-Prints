import React from 'react';

class NavBarDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggled: true }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  toggleMenu(){
    if (this.state.toggled){
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true })
    }
  }

  dropdownMenu(){
    if(this.state.toggled){
      return null;
    } else {
      return (
        <nav className="dropdown-menu">
          <button className="logout-btn-nav" onClick={this.props.logout}>Logout</button>
        </nav>
      )
    }
  }

  render(){
    debugger
    return (
      <div>
        <nav className="dropdown-btn" onClick={this.toggleMenu}>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
          <span>{this.props.currentUser.username}</span>
        </nav>
        {this.dropdownMenu()}
      </div>
    )
  }
}

export default NavBarDropdown;
