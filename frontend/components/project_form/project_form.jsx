import React from 'react';
import StepForm from './step_form';

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

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <div className="project-form-navbar-attachment">
        </div>
        <div className="project-form-navbar-buttons">
          <button onClick={this.handleSubmit}>
            hello</button>
        </div>
      </nav>
    )
  }

  render(){
    return (
      <div className="project-form-wrapper">
        {this.renderFormHeader()}
        {this.renderForm()}
      </div>
    )
  }
}

export default ProjectForm;
