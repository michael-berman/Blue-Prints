import React from 'react';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

  }

  renderForm(){
    return (
      <form>
        <p>form</p>
      </form>
    )
  }

  renderNavBar(){
    return(
      <nav className="project-form-navbar">
        <button onClick={this.handleSubmit}>
        hello</button>
      </nav>
    )
  }

  render(){
    return (
      <div className="project-form-wrapper">
        {this.renderNavBar()}
        {this.renderForm()}
      </div>
    )
  }
}

export default ProjectForm;
