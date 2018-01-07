import React from 'react';

class ProjectFormAddDropdown extends React.Component {
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
        <ul className="dropdown-list-add">
          <li onClick={this.props.addStep}>Step</li>
          <li>Photos</li>
        </ul>
      )
    }
  }

  render(){
    return (
      <div>
        <button
          className='project-form-navbar-button add'
          onClick={this.toggleMenu}>
          + Add <span className="caret"></span></button>
        {this.dropdownMenu()}
      </div>
    )
  }
}

export default ProjectFormAddDropdown;
