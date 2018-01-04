import React from 'react';

class NavBarDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggled: false }
  }

  openMenu(){

  }

  toggledMenu(e){
    e.stopPropagation();
    if(toggled){
      return null;
    } else {
      return (
        <button className="dropdown-btn" onClick={this.openMenu}>
          <img src=""
          </button>
        )

    }
  }

  render(){
    return (

    )
  }
}

export default NavBarDropdown;
