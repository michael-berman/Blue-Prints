import React from 'react';
import ReactDOM from 'react-dom';

class ProjectFormAddDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggled: true }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  componentDidMount(){
    document.addEventListener('click',
      this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click',
      this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(e){
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target) && !this.state.toggled) {
      this.setState({
          toggled: true
      });
    }
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
          <li className='drop-list-add-steps'
            onClick={() => { this.props.addStep(); this.toggleMenu(); }}>
            <i className="fa fa-clone clone-icon" aria-hidden="true"></i>
            Step
          </li>
          <li className="drop-list-add-photos">
            <form>
            <span className="drop-list-add-photos">
              <i className="fa fa-camera-retro camera-icon" aria-hidden="true"></i>
              Photos</span>
            <input type="file" onClick={this.toggleMenu}/>
          </form></li>
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
          <i className="fa fa-plus plus-small-icon" aria-hidden="true"></i>
          Add<i className="fa fa-caret-down caret-small-icon" aria-hidden="true"></i>
        </button>

        {this.dropdownMenu()}
      </div>
    )
  }
}

export default ProjectFormAddDropdown;
