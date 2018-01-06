import React from 'react';
import StepForm from './step_form';
import { Route } from 'react-router-dom';

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

  renderStepForm(){

  }

  renderSteps(){
    debugger
    const stepButtons = Object.values(this.state).map( (stepForm) => {
      return (
        <li>
          <Link to="/projects/new/steps/"></Link>
        </li>
      )
    })
    return (
      <div className="steps-container">
        <ul>
          {steps}
        </ul>
        <button onClick={this.addStep}>Add step</button>
      </div>
    )
  }

  renderSpecificForm(){
    if(this.props.match.path === '/projects/new'){
      return this.renderSteps();
    } else {
      return this.renderStepForm();
    }
  }

  render(){
    return (
      <div className="project-form-wrapper">
        {this.renderFormHeader()}
        {this.renderSpecificForm()}
        <Route path='/projects/new/steps/:stepId' component={StepForm} />
      </div>
    )
  }
}

export default ProjectForm;
