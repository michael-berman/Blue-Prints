import React from 'react';
import StepForm from './step_form';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { 1: <StepForm createStep={this.props.createStep} />}
    this.amount = 1;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  renderProjectForm(){
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

  addStep(){
    this.amount += 1;
    this.setState({ [this.state.amount]: <StepForm createStep={this.props.createStep} />})
  }

  renderStepForm(stepForm){

  }

  renderSteps(){
    debugger
    const stepForms = Object.values(this.state).map( (stepForm) => {
      return
    })
    return (
      <div className="steps-container">
        {steps}
        <button onClick={this.addStep}>Add step</button>
      </div>
    )
  }

  render(){
    return (
      <div className="project-form-wrapper">
        {this.renderFormHeader()}
        {this.renderSteps()}
      </div>
    )
  }
}

export default ProjectForm;
